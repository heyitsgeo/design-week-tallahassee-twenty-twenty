import React from 'react';
import propTypes from 'prop-types';

import pageHeaderStyles from './page-header.module.css';

const PageHeader = ({children}) => {
  return (
    <div className={pageHeaderStyles.header}>
      {children}
    </div>
  );
}

PageHeader.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node)
  ])
}

export default PageHeader;