/**
*
* ColorButton
*
*/

import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { merge } from 'lodash';

const ColorButton =
  ({ icon, color, style: oldStyle, ...ohter }) => {
    const style = merge({}, oldStyle, { backgroundColor: color });
    return (
      <FlatButton icon={icon} {...ohter} style={style} rippleColor={color} />
    );
  };


ColorButton.propTypes = {
  icon: PropTypes.node,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default ColorButton;
