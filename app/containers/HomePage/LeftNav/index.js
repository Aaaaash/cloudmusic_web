import React, { Component } from 'react';

import {
  NavContainer,
} from './components';
import MenuList from 'components/MenuList';
import CurrentPlay from 'components/CurrentPlay';

class LeftNav extends Component {
  render() {
    return (
      <NavContainer>
        <MenuList />
        <MenuList />
        <CurrentPlay />
      </NavContainer>
    );
  }
}

export default LeftNav;
