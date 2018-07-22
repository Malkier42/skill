import React from 'react';
import Space from './space';

class Cell extends React.Component {
  handleClick(x,y) {
    this.props.moveToken(x,y);
  }

  render() {
    const { spaceName, playersPresent, x, y } = this.props;
    return (
      <div className="cell">                
        <Space
          name={spaceName}
          playersPresent={playersPresent}
          handleClick={() => this.handleClick(x,y)}
        />
      </div>
    );
  }
}

export default Cell;
