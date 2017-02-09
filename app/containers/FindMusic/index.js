import React, { Component } from 'react';

import {
  FindContainer, TopNav, NavItem,
} from './components';

class FindMusic extends Component {
  render() {
    return (
      <FindContainer>
        <TopNav>
          <NavItem current>个性推荐</NavItem>
          <NavItem>个性推荐</NavItem>
          <NavItem>个性推荐</NavItem>
          <NavItem>个性推荐</NavItem>
          <NavItem>个性推荐</NavItem>
        </TopNav>
      </FindContainer>
    );
  }
}

export default FindMusic;
