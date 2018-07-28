import React, { Fragment } from 'react';
import Cell from './cell';
import Die from './die';
import './board.css';

class Board extends React.Component {
  render() {
    const { grid, players, die } = this.props.G;
    const { roll, moveToken } = this.props.moves;
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
            x={gridX}
            y={gridY}
            moveToken={moveToken}
          />
        );
      })
    ));
    return (
      <Fragment>
        <div className="container">{cells}</div>
        <Die
          die={die}
          roll={roll}
        />
      </Fragment>
    );
  }
}

export default Board;
