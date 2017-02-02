/**
 * Created by easub on 2017/1/9.
 */
import React, { Component, PropTypes } from 'react';

export default class Dashboard extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { children } = this.props;

    return (
      <div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
};
