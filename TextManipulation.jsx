import React, { useState } from 'react';

const TextManipulationApp = () => {
  const [text, setText] = useState('');

  // Function to handle Uppercase transformation
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  // Function to handle Lowercase transformation
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  // Function to handle deleting the last character
  const handleDelete = () => {
    setText(text.slice(0, -1));
  };

  // Function to handle clearing the text
  const handleClear = () => {
    setText('');
  };

  // Calculate number of words and characters
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Text Manipulation App</h2>

      {/* Textarea for input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="6"
        cols="50"
        placeholder="Type something..."
      />

      <div style={{ marginTop: '10px' }}>
        {/* Buttons for operations */}
        <button onClick={handleUpperCase} style={{ margin: '5px' }}>Uppercase</button>
        <button onClick={handleLowerCase} style={{ margin: '5px' }}>Lowercase</button>
        <button onClick={handleDelete} style={{ margin: '5px' }}>Delete Last</button>
        <button onClick={handleClear} style={{ margin: '5px' }}>Clear</button>
      </div>

      {/* Character and word count */}
      <div style={{ marginTop: '10px' }}>
        <p>Number of Characters: {charCount}</p>
        <p>Number of Words: {wordCount}</p>
      </div>
    </div>
  );
};

export default TextManipulationApp;
