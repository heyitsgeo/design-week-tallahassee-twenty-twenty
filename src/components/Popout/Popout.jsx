import React from 'react';
import propTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'

import './Popout.scss';

const Popout = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <div className={`Popout ${className}${open ? ' open' : ' closed'}`} {...rest}>
      <button
        className="Popout--toggle-button"
        type="button"
        onClick={() => setOpen(!open)}>
        {!open && <span role="img" aria-label="waving hand emoji" className="Popout--open-icon">👋</span>}
        {open && <FaTimes className="Popout--close-icon"/>}
      </button>
      <div className="Popout--content">
        {children}
      </div>
    </div>
  )
};

Popout.propTypes = {
  className: propTypes.string,
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)])
};

export default Popout;
