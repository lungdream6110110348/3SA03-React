import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "AABBCCDDEEFF";
function App() {
  return (
    <body><h1>Welcome to my Game!</h1>
    <div>
      <WordCard value={word}/>
    </div>
    </body>
  );
}

export default App;
