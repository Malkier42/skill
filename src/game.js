import { Game } from 'boardgame.io/core';
import grid from './grid';

const Skill = Game({
  name: 'skill',

  setup: () => ({
    grid,
    die: null,
    players: [
      {
        id: 0,
        position: { y: 2, x: 1 },
        color: 'blue',
      },
      {
        id: 1,
        position: { y: 2, x: 1 },
        color: 'green',
      }
    ],
  }),

  moves: {
    roll(G, ctx) {
      return { ...G, die: ctx.random.D6() };
    },
    moveToken(G, ctx, x, y) {
      let players = [...G.players];
      const player = players.find(player => player.id === Number(ctx.currentPlayer));
      player.position = { x, y };
      return {...G, players}
    },
  },

  flow: {
    phases: [
      {
        name: 'roll phase',
        allowedMoves: ['roll'],
      },
      {
        name: 'move phase',
        allowedMoves: ['moveToken'],
      },
    ],
  },
});

export default Skill;
