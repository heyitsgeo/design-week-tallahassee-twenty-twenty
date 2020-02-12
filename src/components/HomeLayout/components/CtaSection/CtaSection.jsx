import React from 'react';
import { Section } from '../../../Section';
import propTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import './CtaSection.scss';

const CtaSection = ({data}) => {
  return (
    <Section fillScreen={false} hideOverflow={false}>
      <div className="CtaSection-content">
        <h1>Design Week Tallahassee</h1>
        <div className='overflow-hidden'>
        <div className="CtaSection-action">
          <h4 className="CtaSection-brief">A 5 day event that welcomes creatives of all <span className='underline pink'>creeds</span> and <span className='underline orange'>kinds</span></h4>
          <button className='btn' type='button'>
            <span>Snag Tickets</span>
          </button>
        </div>
        </div>
      </div>
    </Section>
  )
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        cupGuyImage: file(relativePath: { eq: "cup_guy.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <CtaSection data={data} {...props} />}
  />
);

CtaSection.propTypes = {
  data: propTypes.shape({
    cupGuyImage: propTypes.shape({
      childImageSharp: propTypes.shape({
        fluid: propTypes.shape({
          src: propTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};


