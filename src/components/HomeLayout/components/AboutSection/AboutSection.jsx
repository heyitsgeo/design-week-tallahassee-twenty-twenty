import React from 'react';
import { Section } from '../../../Section';
import { graphql, StaticQuery } from 'gatsby';
import propTypes from 'prop-types';
import cupGuy from '../../../../images/cup-guy.gif';
import Img from 'gatsby-image';


import './AboutSection.scss';

const AboutSection = ({ data }) => {
  return (
    <Section color='aqua' fillScreen={false} transitionTop={true}>
      <div className="AboutSection-content">
        <div className="AboutSection-illustration">
          <img src={cupGuy} alt="Cup with shifty eyes"/>
        </div>
        <div className="AboutSection-tagline-image">
          <Img fluid={data.creaturesHorizontalTagLine.childImageSharp.fluid}/>
        </div>
        <h1><span className="black-text">Breaking</span> Creatives out of Toxic Work <span
          className="black-text">Patterns</span></h1>
        <div className='AboutSection-details'>
          <span className="divider"/>
          <div className="overflow-hidden">
            <div className='AboutSection-copy'>
              <p>This year Design Week takes on the topic of wellness in creativity. Creative endeavors are crucial to
                our health, but working in the creative industry can be mentally, emotionally - and at times physically
                - demanding. This year's conference focuses on breaking the patterns which limit us, trying new things,
                and incorporating self-care into our journey toward creative fulfillment!
              </p>
              <p>DWT: A week of creativity, conversation and learning, Design Week Tallahassee is an annual 5-day event
                that welcomes creatives of all creeds and kinds. The festivities include guest speakers, workshops and
                social events held at multiple locales around Tallahassee. Design Week aims to educate, inspire, and
                connect designers in our community through a week-long series of art & tech experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        creaturesHorizontalTagLine: file(relativePath: { eq: "creatures-horizontal.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <AboutSection data={data} {...props} />}
  />
);

AboutSection.propTypes = {
  data: propTypes.shape({
    creaturesHorizontalTagLine: propTypes.shape({
      childImageSharp: propTypes.shape({
        fluid: propTypes.shape({
          src: propTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
