import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const inlineStyle = {
  dropStyle: {
    border: '1px solid #ccc',
    borderRadius: '2px',
    minWidth: '140px',
    height: '36px',
    lineHeight: '36px',
    marginLeft: '25px',
  },
  underlineStyle: {
    border: 'none',
  },
  labelStyle: {
    lineHeight: '36px',
    color: '#A1A1A1',
  },
  iconStyle: {
    marginTop: '-10px',
  },
};

class SheetDrop extends Component {   // eslint-disable-line    react/prefer-stateless-function

  handleChangeValue = (e, index, value) => this.props.changeCallBackFunc(value);

  renderMenuItem = (menuItem) =>
    menuItem.map((item, index) =>
      <MenuItem key={index} value={item.value} primaryText={item.text} />
    );

  render() {
    const { value, menuItem } = this.props;
    return (
      <DropDownMenu
        value={value}
        style={inlineStyle.dropStyle}
        underlineStyle={inlineStyle.underlineStyle}
        labelStyle={inlineStyle.labelStyle}
        iconStyle={inlineStyle.iconStyle}
        onChange={this.handleChangeValue}
      >
        {this.renderMenuItem(menuItem)}
      </DropDownMenu>
    );
  }
}

SheetDrop.propTypes = {
  value: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number]
  ),
  menuItem: PropTypes.array,
  changeCallBackFunc: PropTypes.func,
};

export default SheetDrop;
