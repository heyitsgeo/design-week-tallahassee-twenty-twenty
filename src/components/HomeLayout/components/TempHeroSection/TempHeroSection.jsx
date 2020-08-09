import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Section } from '../../../Section';
import Img from 'gatsby-image';

import './TempHeroSection.scss';

const TempHeroSection = ({data}) => (
  <Section color="cream" fillScreen={true}>
    <div className="TempHeroSection-content">
      <div className="hero-image-container">
        <Img fluid={data.heroImage.childImageSharp.fluid} />
        <h6 className={`dates`}>August 14 &mdash; ONWARD 2020</h6>
      </div>
    </div>
  </Section>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "creatures-static.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <TempHeroSection data={data} {...props} />}
  />
)
