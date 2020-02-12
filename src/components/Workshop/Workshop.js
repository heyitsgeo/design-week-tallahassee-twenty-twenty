import React from 'react';
import propTypes from 'prop-types';
import Img from 'gatsby-image';

import './Workshop.scss';

function Workshop(props) {
  const {
    workshop,
    direction
  } = props;

  return (
    <div className='overflow-hidden'>
      <div className={`Workshop ${direction}`}>
        <div className="Workshop-about">
          <h2 className="Workshop-title">{workshop.frontmatter.title}</h2>
          <div className="Workshop-description" dangerouslySetInnerHTML={{ __html: workshop.html }} />
          <button className='btn' type='button'>
            <span>Get Tickets</span>
          </button>
        </div>
        <div className="Workshop-image">
          <Img fluid={workshop.frontmatter.featureImage.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
}

Workshop.propTypes = {
  workshop: propTypes.shape({
  id: propTypes.string.isRequired,
  html: propTypes.string,
  frontmatter: propTypes.shape({
    title: propTypes.string,
    featureImage: propTypes.shape({
      childImageSharp: propTypes.shape({
        fluid: propTypes.shape({
          src: propTypes.string.isRequired
        }).isRequired
      }).isRequired
    })
  })
  }).isRequired,
  direction: propTypes.oneOf(['left', 'right'])
};

Workshop.defaultProps = {
  direction: 'right'
};

export default Workshop;
