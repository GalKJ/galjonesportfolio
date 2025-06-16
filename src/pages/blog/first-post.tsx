import React from 'react';

export default function FirstPost(blogs) {
  return (
    <div>
      <h1>first post</h1>
      <p>this will be the copy of the blog</p>
      <p>{blogs}</p>
    </div>
  );
}
