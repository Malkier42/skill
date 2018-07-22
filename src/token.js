import React from 'react';

class Token extends React.Component {
  render() {
    const { color } = this.props.player;
    const style = {
      backgroundColor: color,
    };

    return (
      <div 
        className="token"
        style={style}
      />
    );
  }
}

export default Token;
