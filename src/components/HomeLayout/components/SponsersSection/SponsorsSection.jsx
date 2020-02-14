import React from 'react';
import { Section } from '../../../Section';
import Img from 'gatsby-image';

import './SponsorsSection.scss';
import { graphql, StaticQuery } from 'gatsby';

const DEFAULT_IMAGE_WIDTH = 200;

const SponsorsSection = ({data}) => {
  const {
    sponsors,
    sponsorsImages
  } = data;

  function getImageByName(imgResource, scale) {
    const foundImage = sponsorsImages.edges
      .filter(edge => edge.node.childImageSharp && edge.node.childImageSharp.fluid)
      .find(safeEdge => safeEdge.node.childImageSharp.fluid.originalName === imgResource);

    if (foundImage) {
      const scaledWidth = scale ? DEFAULT_IMAGE_WIDTH * scale : null;

      let style = {};

      if (scaledWidth) {
        style = {
          width: scaledWidth
        }
      }

      const imageProps = foundImage.node.childImageSharp.fluid;
      return (
        <div className="Sponsor-image" style={style}>
          <Img fluid={imageProps}/>
        </div>
      )
    }
  }

  function sponsorsForLevel(level) {
    return sponsors.edges
      .filter(edge => edge.node.level === level)
      .map(edge => edge.node);
  }

  function getImageLink(imageProps) {
    return (
      <a className="link" key={imageProps.id} href={imageProps.website}>
        {getImageByName(imageProps.logo_resource, imageProps.scale)}
      </a>
    );
  }

  return (
    <Section color="cream" fillScreen={false}>
      <div className="SponsorsSection">
        <h6 className="SponsorsSection-thankyou">Thank You to our Sponsors</h6>
        <div className="SponsorsSection-sponsors">
          <div className="level">
            <div className="divider" />
            <h6 className="level-title">Godzilla</h6>
            <div className="sponsors">
              {sponsorsForLevel(1).map(node => getImageLink(node))}
            </div>
          </div>
          <div className="level">
            <div className="divider" />
            <h6 className="level-title">Demogorgon</h6>
            <div className="sponsors">
              {sponsorsForLevel(2).map(node => getImageLink(node))}
            </div>
          </div>
          <div className="level">
            <div className="divider" />
            <h6 className="level-title">The Swamp Creature</h6>
            <div className="sponsors">
              {sponsorsForLevel(3).map(node => getImageLink(node))}
            </div>
          </div>
          <div className="level">
            <div className="divider" />
            <h6 className="level-title">Mad Scientist</h6>
            <div className="sponsors">
              {sponsorsForLevel(4).map(node => getImageLink(node))}
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
        sponsors: allSponsorsJson {
          edges {
            node {
              id
              name
              website
              logo_resource
              level
              scale
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
