
import React from 'react';
import { render } from 'react-dom';
import { Client } from 'boardgame.io/react';
import Skill from './game';
import Board from './board';

const App = Client({
  game: Skill,
  board: Board,
});

render(<App/>, document.getElementById('root'));