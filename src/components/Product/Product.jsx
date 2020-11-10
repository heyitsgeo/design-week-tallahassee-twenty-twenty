import React from 'react';
import Img from 'gatsby-image/index';
import propTypes from 'prop-types';

import productStyles from './Product.module.css';
import Card from '../Card';
import Button from '../Button';

const Product = (props) => {
  const {
    itemId,
    itemPrice,
    itemName,
    itemDescription,
    itemSizes,
    featuredImage,
    className,
    dimensions,
    year,
  } = props;

  if (!featuredImage) {
    console.error('Missing featuredImage for: ' + itemName);
  }

  const snipCartProps = {
    'data-item-id': `${itemId}`,
    'data-item-price': itemPrice,
    'data-item-url': process.env.GATSBY_SNIPCART_PRODUCT_JSON_URL,
    'data-item-name': `${year} - ${itemName}`,
    'data-item-description': itemDescription,
    'data-item-weight': dimensions && dimensions.weight,
    'data-item-image': featuredImage && featuredImage.src,
  }

  if (itemSizes) {
    snipCartProps['data-item-custom1-name'] = ' Size';
    snipCartProps['data-item-custom1-options'] = itemSizes.join('|');
  }

  return (
    <div className={`${productStyles.product__container} ${className}`}>
      <Card>
        <Card.Header>{year} &ndash; {itemName}</Card.Header>
        <Card.Body>
          <div className={productStyles.product__featuredImageContainer}>
            <Img fluid={featuredImage} className={productStyles.product__featuredImage} />
          </div>
          <div className={productStyles.product__description}>
            {itemDescription}
          </div>
        </Card.Body>
        <Card.Footer>
          <div className={productStyles.product__purchaseRow}>
            <h6 className={productStyles.product__price}>${itemPrice}</h6>
            <Button
              styleName="snipcart-add-item"
              {...snipCartProps}>
              Add to Cart
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Product;

Product.propTypes = {
  itemName: propTypes.string.isRequired,
  itemId: propTypes.string.isRequired,
  itemPrice: propTypes.string.isRequired,
  itemDescription: propTypes.string.isRequired,
  itemSizes: propTypes.array,
  className: propTypes.string,
  featuredImage: propTypes.any,
  year: propTypes.number,
}
