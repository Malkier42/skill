import React from 'react';
import Token from './token';

class Cell extends React.Component {
  render() {
    const { space, playersPresent } = this.props;
    const tokens = playersPresent.map((player) => (
      <Token
        key={player.id}
        player={player}
      />
    ));

    return (
      <div className="cell">                
        <div className="space">{space}
          <div className="tokens-container">{tokens}</div>
        </div>
      </div>
    );
  }
}

export default Cell;
