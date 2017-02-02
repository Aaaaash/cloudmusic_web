import React, { Component, PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const inlineStyle = {
  btnGroup: {
    margin: '0px',
  },
  radioBtn: {
    float: 'left',
    width: '150px',
    top: '6px',
    textIndent: '0',
  },
};

class RadioGroup extends Component {
  handleChangePropsValu = (e, value) => this.props.changeCallBackFunc(value);

  render() {
    const { value, primartText1, primartText2 } = this.props;
    return (
      <span>
        <RadioButtonGroup
          style={inlineStyle.btnGroup}
          name="source"
          valueSelected={value}
          onChange={this.handleChangePropsValu}
        >
          <RadioButton
            style={inlineStyle.radioBtn}
            value={0}
            label={primartText1}
          />
          <RadioButton
            style={inlineStyle.radioBtn}
            value={1}
            label={primartText2}
          />
        </RadioButtonGroup>
      </span>
    );
  }
}

RadioGroup.propTypes = {
  changeCallBackFunc: PropTypes.func,
  value: PropTypes.number,
  primartText1: PropTypes.string,
  primartText2: PropTypes.string,
};
export default RadioGroup;
