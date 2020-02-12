import React from 'react';
import { Section } from '../../../Section';
import Img from 'gatsby-image';

import './SponsorsSection.scss';
import { graphql, StaticQuery } from 'gatsby';

const SponsorsSection = ({data}) => {
  const {
    sponsors,
    sponsorsImages
  } = data;

  function getImageByName(imgResource) {
    const foundImage = sponsorsImages.edges
      .filter(edge => edge.node.childImageSharp && edge.node.childImageSharp.fluid)
      .filter(safeEdge => safeEdge.node.childImageSharp.fluid.originalName === imgResource);

    if (foundImage.length > 0) {

      console.log(foundImage);

      const imageProps = foundImage[0].node.childImageSharp.fluid;
      return (
        <div className="Sponsor-image">
          <Img fluid={imageProps}/>
        </div>
      )
    }
  }

  return (
    <Section color="cream" fillScreen={false} transitionTop={true}>
      <div className="SponsorsSection">
        <h6 className="SponsorsSection-thankyou">Thank You to our Sponsors</h6>
        <div className="SponsorsSection-sponsors">
          {sponsors.edges.map(edge =>
            <a className="link" key={edge.node.id} href={edge.node.website}>
              {getImageByName(edge.node.logo_resource)}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        sponsors: allSponsorsJson {
          edges {
            node {
              id
              name
              website
              logo_resource
            }
          }
        }
        sponsorsImages: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500) {
                originalName
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SponsorsSection data={data} {...props} /> }
    />
);
