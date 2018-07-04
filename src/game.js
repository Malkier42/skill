import { Game } from 'boardgame.io/core';

const Skill = Game({
  name: 'skill',

  setup: () => ({
    grid: [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ],
  }),
});

export default Skill;
