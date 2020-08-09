import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Section } from '../../../Section';
import Img from 'gatsby-image';

import './TempHeroSection.scss';

const TempHeroSection = ({data}) => (
  <Section color="cream" fillScreen={true}>
    <div className="TempHeroSection-content">
      <div className="hero-image-container">
        {/*<h4 className="announcement">Design Week is going virtual!</h4>*/}
        <Img fluid={data.heroImage.childImageSharp.fluid} />
        <h4 className={`dates announcement`}><span className="underline">Going virtual</span> August 21ST &mdash; December 18TH 2020</h4>
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
