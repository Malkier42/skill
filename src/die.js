import React from 'react';

class Die extends React.Component {
  handleClick() {
    this.props.roll();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          Roll dice
        </button>
        <p>{this.props.die}</p>
      </div>
    );
  }
}

export default Die;
