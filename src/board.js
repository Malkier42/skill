import React from 'react';

class Board extends React.Component {
  render() {
    const cells = this.props.G.grid.map((row, i) => (
      row.map((cell, j) => {
        const id = 3 * i + j;
        return <div key={id}>{this.props.G.grid[i][j]}</div>;
      })
    ));
    return cells;
  }
}

export default Board;
