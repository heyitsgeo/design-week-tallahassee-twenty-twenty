import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import propTypes from 'prop-types';
import Img from 'gatsby-image';
import { FaInstagram, FaLink, FaLinkedinIn, FaFacebookF, FaTwitter, FaDribbble } from 'react-icons/fa';

import './Speaker.scss';

const socialMetaMap = {
  'website': {
    icon: <FaLink />,
    baseUrl: ''
  },
  'instagram': {
      icon: <FaInstagram/>,
      baseUrl: 'https://www.instagram.com/'
  },
  'facebook': {
    icon: <FaFacebookF />,
    baseUrl: 'https://www.facebook.com/'
    },
  'linkedin': {
    icon: <FaLinkedinIn />,
    baseUrl: 'https://www.linkedin.com/in/'
  },
  'twitter': {
    icon: <FaTwitter />,
    baseUrl: 'https://twitter.com/'
  },
  'dribble': {
    icon: <FaDribbble />,
    baseUrl: 'https://dribbble.com/'
   },
  'instagram_secondary': {
    icon: <FaInstagram />,
    baseUrl: 'https://www.instagram.com/'
  }
};

const Speaker = ({data, ...rest}) => {
  const {
    speaker
  } = rest;

  const getSocialIcons = (social) => {
    return Object.keys(social).map(key => {
      if (social[key] && social[key].trim().length > 0) {
        return <a className="Speaker-social-icon"
                  rel="noopener noreferrer"
                  key={key} href={socialMetaMap[key].baseUrl + social[key]}>{socialMetaMap[key].icon}
        </a>
      }
      return null;
    })
  };

  const getSpeakerHeadshot = (imgResource) => {
    const {
      images
    } = data;

    const foundEdge = images.edges
      .filter(edge => edge.node.childImageSharp && edge.node.childImageSharp.fluid)
      .filter(safeEdge => safeEdge.node.childImageSharp.fluid.originalName === imgResource);

    if (foundEdge.length > 0) {

      const imageProps = foundEdge[0].node.childImageSharp.fluid;
      return (
        <div className="Speaker-headshot">
          <Img key={imgResource} fluid={imageProps}/>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Speaker">
      {getSpeakerHeadshot(speaker.img_resource)}
      <h5 className="Speaker-name">{speaker.name}</h5>
      <p>{speaker.title}</p>
      <div className="Speaker-social">
        {getSocialIcons(speaker.social).map(icon => icon)}
      </div>
    </div>
  )
};

export default props => (
  <StaticQuery query={graphql`
    query {
      images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
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
   render={data => <Speaker data={data} {...props} /> }
  />
);

Speaker.propTypes = {
  speaker: propTypes.shape({
    img_resource: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    social: propTypes.object,
    title: propTypes.string.isRequired
  }).isRequired
};
