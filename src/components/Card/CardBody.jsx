import React from 'react';

import cardBodyStyles from './CardBody.module.css';

const CardBody = ({ children }) => {
  return (
    <div className={cardBodyStyles.cardBody}>
      {children}
    </div>
  )
}

export default CardBody;