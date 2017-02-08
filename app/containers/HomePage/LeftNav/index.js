import React, { Component } from 'react';

import {
  NavContainer,
} from './components';
import MenuList from 'components/MenuList';

class LeftNav extends Component {
  render() {
    return (
      <NavContainer>
        <MenuList />
        <MenuList />
      </NavContainer>
    );
  }
}

export default LeftNav;
