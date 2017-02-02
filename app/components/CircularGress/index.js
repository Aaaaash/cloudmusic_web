import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
  textAlign: 'center',
  margin: '25px 0',
};

class CircularGress extends Component {   // eslint-disable-line  react/prefer-stateless-function
  render() {
    return (
      <div style={style}>
        <CircularProgress size={60} />
      </div>
    );
  }
}

export default CircularGress;
