/**
 * Created by easub on 16/10/20.
 */
import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { languageCode, languageZh } from 'common/languages';


export default class LoadImage extends Component {//eslint-disable-line

  render() {
    return (
      <SelectField
        style={{
          width: 150,
          marginRight: 23,
          height: 34,
          border: 'solid 1px #DEE4EB',
          ...this.props.style,
        }}
        underlineStyle={{
          display: 'none',
        }}
        iconStyle={{
          marginTop: -8,
        }}
        labelStyle={{
          whiteSpace: 'nowrap',
          marginTop: -6,
          marginLeft: 6,
        }}
        value={this.props.value}
        onChange={(e, i, v) => this.props.onChange(v, i)}
      >
        <MenuItem style={{ display: 'none' }} value={''} primaryText={this.props.label} />
        {languageZh.map((value, i) =>
          <MenuItem key={i} value={languageCode[i]} primaryText={value} />
        )}
      </SelectField>
    );
  }

}

LoadImage.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
