import React from 'react';
import { Section } from '../../../Section';
import Img from 'gatsby-image';

import './SponsorsSection.scss';
import { graphql, StaticQuery } from 'gatsby';

const DEFAULT_IMAGE_WIDTH = 200;

const SponsorsSection = ({data}) => {
  const {
    sponsors,
  } = data;

  function sponsorsForLevel(level) {
    const { edges } = sponsors;
    return edges
      .filter((edge) => edge.node.frontmatter.level === level)
      .map(edge => ({
        id: edge.node.id,
        scale: edge.node.frontmatter.logoScale,
        websiteUrl: edge.node.frontmatter.websiteUrl,
        fluidImageProps: imageFromNode(edge.node)
      }));
  }

  const imageFromNode = (node) => {
    if (!node) {
      return null;
    }

    const {
      frontmatter
    } = node;

    if (frontmatter && frontmatter.logo) {
      if (frontmatter.logo.hasOwnProperty('childImageSharp')) {
        return frontmatter.logo.childImageSharp.fluid;
      } else {
        console.error('Unable to locate childImageSharp props for: ' + node.id + '. Review post details.')
      }
    } else {
      console.error('logo is undefined for: ' + node.id);
    }
  }

  function getImageLink(imageProps, scale, key, website) {
    const scaledWidth = scale ? DEFAULT_IMAGE_WIDTH * scale : null;

    let style = {
      display: 'block'
    };

    if (scaledWidth) {
      style = {
        ...style,
        width: scaledWidth
      }
    }

    return imageProps ? (
      <a className="link" key={key} href={website}>
        <span className="Sponsor-image" style={style}>
          <Img fluid={imageProps}/>
        </span>
      </a>
    ) : <a className="link" key={key} href={website}>{website}</a>;
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
              {sponsorsForLevel(1).map(sponsor => getImageLink(
                sponsor.fluidImageProps,
                sponsor.scale,
                sponsor.id,
                sponsor.websiteUrl
              ))}
            </div>
          </div>
          <div className="level">
            <div className="divider" />
            <h6 className="level-title">Demogorgon</h6>
            <div className="sponsors">
              {sponsorsForLevel(2).map(sponsor => getImageLink(
                sponsor.fluidImageProps,
                sponsor.scale,
                sponsor.id,
                sponsor.websiteUrl
              ))}
            </div>
          </div>
          <div className="level">
            <div className="divider" />
            <h6 className="level-title">The Swamp Creature</h6>
            <div className="sponsors">
              {sponsorsForLevel(3).map(sponsor => getImageLink(
                sponsor.fluidImageProps,
                sponsor.scale,
                sponsor.id,
                sponsor.websiteUrl
              ))}
            </div>
          </div>
          <div className="level">
            <div className="divider" />
            <h6 className="level-title">Mad Scientist</h6>
            <div className="sponsors">
              {sponsorsForLevel(4).map(sponsor => getImageLink(
                sponsor.fluidImageProps,
                sponsor.scale,
                sponsor.id,
                sponsor.websiteUrl
              ))}
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
        sponsors: allMarkdownRemark(
          sort: { order: ASC, fields: frontmatter___name },
          filter: { frontmatter: { postType: { eq: "sponsor" } } }
        ) {
          edges {
            node {
            id,
            frontmatter {
              name,
              level,
              websiteUrl,
              logoScale,
              logo {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                   }
                  }
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
