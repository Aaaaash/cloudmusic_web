/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStructuredSelector } from 'reselect';
import theme from 'theme/theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { userinfoRequest } from './actions';
import { connect } from 'react-redux';
import { selectLoggedIn, selectUserInfo } from './selectors';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.loggedIn && this.props.userInfo.get('email').length === 0) {
      this.props.requestUserInfo();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && this.props.userInfo.get('email').length === 0) {
      this.props.requestUserInfo();
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div style={{ flex: 1 }}>
          <Helmet
            titleTemplate="云音乐"
            defaultTitle="cloudmusic"
            meta={[
              { name: 'description', content: 'easub 2.0 application' },
            ]}
          />
          {React.Children.toArray(this.props.children)}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  requestUserInfo: React.PropTypes.func,
  loggedIn: React.PropTypes.string,
  userInfo: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
  userInfo: selectUserInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestUserInfo: () => dispatch(userinfoRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
