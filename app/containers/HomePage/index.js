/**
 * Created by easub on 2017/1/9.
 */
import React, { Component } from 'react';

const inlineStyle = {
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#C62F2F',
    display: 'flex',
    alignItems: 'center'
  },
};

export default class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={inlineStyle.header}>
        网易云音乐
      </div>
    );
  }
}
