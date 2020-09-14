import React from 'react';

import cardStyles from './card.module.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = ({ children }) => {
  return (
    <div className={cardStyles.card}>
      {children}
    </div>
  )
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;