import React from 'react';
import { render } from 'react-dom';
import TreasureHunt from './TreasureHunt';
import './style.css';

function App() {
  return (
    <div>
      <iframe src="./index.html" width="100%" height="600"></iframe>
      render(<TreasureHunt />, document.getElementById('root'))
    </div>
  );
}

export default App;