import React from 'react';
import propTypes from 'prop-types';
import Img from 'gatsby-image';

import './Workshop.scss';
import LinkButton from '../LinkButton';
import { graphql, StaticQuery } from 'gatsby';

function Workshop(props) {
  const {
    workshop,
    direction,
    data
  } = props;

  const canPurchaseTickets = workshop.frontmatter.eventbrite && workshop.frontmatter.eventbrite.trim().length > 0;
  const isFree = !workshop.frontmatter.rsvp;

  return (
    <div className='overflow-hidden'>
      <div className={`Workshop ${direction}`}>
        <div className="Workshop-about">
          <h2 className="Workshop-title">{workshop.frontmatter.title}</h2>
          <div className="Workshop-description" dangerouslySetInnerHTML={{ __html: workshop.html }} />
          <div className={`button-container${!canPurchaseTickets ? ' disabled' : ''}`}>
            {!isFree && <LinkButton href={workshop.frontmatter.eventbrite} styleClass="secondary" disabled={!(canPurchaseTickets)}>
              {canPurchaseTickets ? 'Get Tickets' : 'Check Back Soon'}
            </LinkButton>}
            {isFree && <div className="free-illustration">
              <Img fluid={data.freeImage.childImageSharp.fluid} />
            </div>}
          </div>
        </div>
        <div className="Workshop-image">
          <Img fluid={workshop.frontmatter.featureImage.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        freeImage: file(relativePath: { eq: "free.png" }) {
          childImageSharp {
            fluid(maxWidth: 298) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Workshop data={data} {...props} />}
    />
)

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
