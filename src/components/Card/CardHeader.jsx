import React from 'react';

import cardHeaderStyles from './CardHeader.module.css';

const CardHeader = ({ children }) => {
  return (
    <div className={cardHeaderStyles.cardHeader}>
      {children}
    </div>
  );
}

export default CardHeader;