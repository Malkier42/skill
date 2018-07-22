import { Game } from 'boardgame.io/core';

const Skill = Game({
  name: 'skill',

  setup: () => ({
    grid: [
      ['S','Warp','Arrow','I'],
      ['Math','Tar Pits','Finish','Ll'],
      ['Las Vegas','K','Sniper','lL']
    ],
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
    moveToken(G, ctx, x, y) {
      let players = [...G.players];
      const player = players.find(player => player.id === Number(ctx.currentPlayer));
      player.position = { x, y };
      return {...G, players}
    },
  },
});

export default Skill;
