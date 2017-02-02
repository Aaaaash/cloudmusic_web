/**
 * Created by easub on 16/10/18.
 */
import React, { Component, PropTypes } from 'react';

import styled from 'styled-components';

const HeaderTabsContainer = styled.div`
  width: 100%;
  background-color: #FFF;
  height: 50px;
  box-shadow:  0 5px 5px -5px #999999;
  padding: 0 38px;
`;

const HeaderTabOption = styled.button`
  display: inline-block;
  text-align: center;
  margin-right: 35px;
  padding: 15px 0;
  min-width: 65px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  color: ${(props) => props.chosen ? '#454545' : '#999'};
  border-bottom: ${(props) => props.chosen ? '2px solid #0081FF' : 'inherit'};
`;

class HeaderTab extends Component {  // eslint-disable-line  react/prefer-stateless-function

  renderTabs = (tabItems, tabsValue) =>
    tabItems.map((title, index) => {
      const value = index + 1;
      return (<HeaderTabOption
        key={value}
        chosen={tabsValue === value}
        onClick={() => this.props.handleChangeTabsValue(value)}
      >
        {title}
      </HeaderTabOption>);
    })


  render() {
    const { tabsValue, tabItems } = this.props;
    return (
      <HeaderTabsContainer >
        {this.renderTabs(tabItems, tabsValue)}
      </HeaderTabsContainer>
    );
  }
}

HeaderTab.propTypes = {
  tabItems: PropTypes.array,
  tabsValue: PropTypes.number,
  handleChangeTabsValue: PropTypes.func,
};

export default HeaderTab;
