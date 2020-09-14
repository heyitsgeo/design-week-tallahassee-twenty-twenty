import React from 'react';
import propTypes from 'prop-types';
import PageHeader from './page-header';
import { colors } from '../../constants/colors';

import pageTitleStyles from './page-title.module.css';

const PageTitle = ({children, color}) => {
  const titleStyles = {
    color
  };

  return <h1 style={titleStyles} className={pageTitleStyles.title}>{children}</h1>
}

PageHeader.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node)
  ]),
  color: propTypes.string
}

PageTitle.defaultProps = {
  color: colors.black
}

export default PageTitle;