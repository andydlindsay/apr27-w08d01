import React from 'react';
import './App.scss';
import Header from './components/Header';
import Game from './components/Game';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
};

export default App;
