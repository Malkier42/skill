import React from 'react';
import Cell from './cell';
import './board.css';

class Board extends React.Component {
  render() {
    const { grid, players } = this.props.G;

    const cells = grid.map((row, gridY) => (
      row.map((cell, gridX) => {
        const playersPresent = players.filter((player) => {
          const { y, x } = player.position;
          return y === gridY && x === gridX;
        })
        const id = 3 * gridY + gridX;

        return (
          <Cell
            key={id}
            space={grid[gridY][gridX]}
            playersPresent={playersPresent}
          />
        );
      })
    ));
    return (
      <div className="container">{cells}</div>
    );
  }
}

export default Board;
