import React, { Component } from 'react';

import {
  HeaderContainer, AuthSetting,
} from './components';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        CloudMusic
        <AuthSetting>AuthInfo</AuthSetting>
      </HeaderContainer>
    );
  }
}

export default Header;
