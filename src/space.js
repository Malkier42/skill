import React from 'react';
import Token from './token';

class Space extends React.Component {
  render() {
    const { name, playersPresent, handleClick } = this.props;
    const tokens = playersPresent.map((player) => (
      <Token
        key={player.id}
        player={player}
      />
    ));

    return (
      <div 
        className="space"
        onClick={handleClick}
      >
        {name}
        <div className="tokens-container">{tokens}</div>
      </div>
    );
  }
}

export default Space;
