import React from 'react';
import propTypes from 'prop-types';
import { colors } from '../../constants/colors';

import pageDescriptionStyles from './page-description.module.css';

const PageDescription = ({children, color}) => {
  const titleStyles = {
    color
  };

  return <p style={titleStyles} className={pageDescriptionStyles.description}>{children}</p>
}

PageDescription.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node)
  ]),
  color: propTypes.string
}

PageDescription.defaultProps = {
  color: colors.black
}

export default PageDescription;