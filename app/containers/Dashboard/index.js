/**
 * Created by easub on 2017/1/9.
 */
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

const DashContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

export default class Dashboard extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { children } = this.props;
    return (
      <DashContainer>
        <Header />
        {children}
        <Footer />
      </DashContainer>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
};
