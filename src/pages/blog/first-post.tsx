import React from 'react';
import { getCurrentDate } from '../../utils/getCurrentDate';

interface FirstPostProps {
  date: string;
  title: string;
  body: string;
  author: string;
}

export default function FirstPost({ title, body, author }: FirstPostProps) {
  // I think i want to move this variable to the parent component and pass it as a prop.
  const date = getCurrentDate();

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
}
