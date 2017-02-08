/**
 * Created by easub on 2017/1/9.
 */
import React, { Component } from 'react';
import styled from 'styled-components';

import LeftNav from './LeftNav';

const HomeContainer = styled.div`
  flex: 1;
`;

export default class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HomeContainer>
        <LeftNav />
      </HomeContainer>
    );
  }
}
