import React from 'react';

class Token extends React.Component {
  render() {
    const { color } = this.props.player;
    const style = {
      height: '10px',
      width: '10px',
      borderRadius: '100%',
      backgroundColor: color,
    };

    return (
      <div
        style={style}
      />
    );
  }
}

export default Token;
