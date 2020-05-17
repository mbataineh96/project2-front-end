import React from 'react';
import './App.css';
import './Tile.css';

import {Tile} from './Tile.js';

function App() {
  return (
    <div id="user-bar">

    </div>,

    <div id="game-board">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
}

export default App;
