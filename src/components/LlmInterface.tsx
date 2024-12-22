'use client';

import React, { useState } from 'react';

interface Message {
  input: string;
  response: string;
}

export default function LlmInterface() {
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submitting', content);
    const res = await fetch('/api/llm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'CognitiveComputations/dolphin-llama3.1:latest',
        messages: [
          {
            role: 'user',
            content: content,
          },
        ],
      }),
    });
    const data = await res.json();
    const responseMessage = data.choices[0].message.content;
    setMessages([...messages, { input: content, response: responseMessage }]);
    setContent(''); // Clear the input field after submission
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-yellow">LLM Integration</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your content"
          className="text-black p-2 border border-gray-300 rounded mb-2 w-full whitespace-normal"
          rows={1}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
      <div className="chat-history h-64 overflow-y-auto border border-gray-300 p-2 rounded">
        {messages.map((message, index) => (
          <div key={index} className="message mb-2 break-words">
            <p>
              <strong>Input:</strong> {message.input}
            </p>
            <p>
              <strong>Response:</strong> {message.response}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
