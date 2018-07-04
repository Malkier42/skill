import React from 'react';
import './board.css';

class Board extends React.Component {
  render() {
    const cells = this.props.G.grid.map((row, i) => (
      row.map((cell, j) => {
        const id = 3 * i + j;
        return (
          <div className="cell" key={id}>
            <div className="space">{this.props.G.grid[i][j]}</div>
          </div>
        );
      })
    ));
    return (
      <div className="container">{cells}</div>
    );
  }
}

export default Board;
