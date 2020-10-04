import React from 'react';
import propTypes from 'prop-types';

import buttonStyles from './Button.module.css';

const Button = (props) => {
  const {
    children,
    styleName,
    ...rest
  } = props;

  return (
    <button {...rest} className={`${buttonStyles.wrapper} ${styleName}`}>
      <span className={buttonStyles.content}>{children}</span>
    </button>
  )
}

Button.propTypes = {
  children: propTypes.node,
  styleName: propTypes.string,
}

export default Button;