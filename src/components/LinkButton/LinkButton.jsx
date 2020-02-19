import React from 'react';
import propTypes from 'prop-types';

import './LinkButton.scss';


const LinkButton = ({children, href, styleClass, target, theme, disabled}) => {
  const handleClick = disabled ? event => event.preventDefault() : () => {};

  const disabledClass = disabled ? ' disabled' : '';

  return (
    <a className={`LinkButton ${styleClass} ${theme}${disabledClass}`} href={href} target={target} rel="noopener noreferrer" onClick={handleClick}>
      <span>{children}</span>
    </a>
  )
};

LinkButton.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.string]),
  href: propTypes.string,
  styleClass: propTypes.oneOf(['primary', 'secondary', 'aqua']).isRequired,
  target: propTypes.string.isRequired,
  theme: propTypes.oneOf(['sunset']).isRequired,
  disabled: propTypes.bool.isRequired
};

LinkButton.defaultProps = {
  styleClass: 'primary',
  target: '_blank',
  theme: 'sunset',
  disabled: false
};

export default LinkButton;


