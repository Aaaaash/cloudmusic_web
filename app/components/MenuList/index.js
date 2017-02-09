import React, { Component } from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

const ListTitle = styled.h3`
  color: #7D7D7D;
  font-size: 12px;
  font-weight: normal;
  line-height: 36px;
  padding-left: 10px;
`;

const ListItem = styled.li`
  color: #5C5C5C;
  padding-left: 20px;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #000;
  }
`;

class MenuList extends Component {
  render() {
    return (
      <div>
        <ListTitle>推荐</ListTitle>
        <ul>
          <ListItem onClick={() => browserHistory.push('/home/findMusic')}>发现音乐</ListItem>
          <ListItem onClick={() => browserHistory.push('/home/privateFM')}>死人FM</ListItem>
          <ListItem onClick={() => browserHistory.push('/home/mv')}>MV</ListItem>
          <ListItem onClick={() => browserHistory.push('/home/firend')}>朋友</ListItem>
        </ul>
      </div>
    );
  }
}

export default MenuList;
