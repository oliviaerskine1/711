import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My New Website
        </p>
        <a
          className="App-link"
          href="https://snake.googlemaps.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play a Game
        </a>
      </header>
    </div>
  );
  }

export default App;
