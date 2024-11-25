import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld'; // Import HelloWorld
import Counter from './Counter';       // Import Counter

function App() {
  return (
    <div className="App">
      {/* Render HelloWorld component */}
      <HelloWorld name="Rayhaan Mohamed" />
      
      {/* Render Counter component */}
      <Counter />
    </div>
  );
}

export default App;
