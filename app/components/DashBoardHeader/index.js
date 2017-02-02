import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router';
import LoadImage from 'components/ImageLoader';
import styles from './styles.css';
import logo from './head_logo_white@2x.png';
import defaultAvatar from 'components/ImageLoader/default_avatar.png';

const inlineStyle = {
  labelStyle: {
    color: '#FFF',
  },
  underlineStyle: {
    border: 'none',
  },
  searchStyle: {
    marginRight: '5px',
  },
  authStyle: {
    display: 'none',
  },
  dropMenuStyle: {
    minWidth: '134px',
  },
};

class DashBoardHeader extends Component {   // eslint-disable-line  react/prefer-stateless-function
  render() {
    const { onLogout } = this.props;
    const authInfo = this.props.userInfo.toJS();
    return (
      <div className={classNames(styles.dashboard_header)}>
        <Link className={classNames(styles.header_logo)} to="/pub">
          <img alt={authInfo.name} src={logo} />
        </Link>
        <div className={classNames(styles.header_auth_bar)}>
          <a className={classNames(styles.header_search)}>
            <ActionSearch color="#FFF" style={inlineStyle.searchStyle} />
            任务广场
          </a>
          <div className={classNames(styles.header_auth_avatar)}>
            <LoadImage
              className={classNames(styles.header_default_avatar)}
              defaultSrc={defaultAvatar}
              imgSrc={authInfo.avatar}
            />
          </div>
          <DropDownMenu
            value={0}
            style={inlineStyle.dropMenuStyle}
            labelStyle={inlineStyle.labelStyle}
            underlineStyle={inlineStyle.underlineStyle}
          >
            <MenuItem
              value={0}
              primaryText={authInfo.name ? authInfo.name : 'loading...'}
              onClick={onLogout}
              style={inlineStyle.authStyle}
            />
            <MenuItem
              value={1}
              primaryText="退出"
              onClick={onLogout}
            />
          </DropDownMenu>
        </div>
      </div>
    );
  }
}

DashBoardHeader.propTypes = {
  userInfo: PropTypes.object,
  onLogout: PropTypes.func,
};

export default DashBoardHeader;
