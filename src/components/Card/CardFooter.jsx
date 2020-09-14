import React from 'react';

import cardFooterStyles from './CardFooter.module.css';

const CardFooter = ({ children }) => {
  return (
    <div className={cardFooterStyles.cardFooter}>
      {children}
    </div>
  );
}

export default CardFooter;