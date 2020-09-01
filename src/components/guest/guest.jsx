import React from 'react';
import proptypes from 'prop-types';
import Img from 'gatsby-image'
import {
  FaInstagram,
  FaLink,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaDribbble
} from 'react-icons/fa';

import guestStyles from './guest.module.css'

const Guest = (props) => {
  const {
    name,
    title,
    facebookUrl,
    instagramUrl,
    websiteUrl,
    linkedinUrl,
    twitterUrl,
    dribbbleUrl,
    featuredImage
  } = props;

  const getIdForGuest = (str) => {
    return str
      .split(' ')
      .filter(s => !!s)
      .map(s => s.toLowerCase())
      .join('-');
  }

  return (
    <div className={guestStyles.container} id={getIdForGuest(name)}>
      <div className={guestStyles.imageContainer}>
        <Img fluid={featuredImage}/>
      </div>
      <h5 className={guestStyles.name}>{name}</h5>
      <p className={guestStyles.title}>{title}</p>
      <div className={guestStyles.socialLinks}>
        {facebookUrl && (
          <a className={guestStyles.socialLink} rel="noopener noreferrer" href={facebookUrl}>
            <FaFacebookF/>
          </a>
        )}
        {instagramUrl && (
          <a className={guestStyles.socialLink} rel="noopener noreferrer" href={instagramUrl}>
            <FaInstagram/>
          </a>
        )}
        {twitterUrl && (
          <a className={guestStyles.socialLink} rel="noopener noreferrer" href={twitterUrl}>
            <FaTwitter/>
          </a>
        )}
        {websiteUrl && (
          <a className={guestStyles.socialLink} rel="noopener noreferrer" href={websiteUrl}>
            <FaLink/>
          </a>
        )}
        {linkedinUrl && (
          <a className={guestStyles.socialLink} rel="noopener noreferrer" href={linkedinUrl}>
            <FaLinkedinIn/>
          </a>
        )}
        {dribbbleUrl && (
          <a className={guestStyles.socialLink} rel="noopener noreferrer" href={dribbbleUrl}>
            <FaDribbble/>
          </a>
        )}
      </div>
    </div>
  )
}

Guest.propTypes = {
  name: proptypes.string.isRequired,
  title: proptypes.string.isRequired,
  facebookUrl: proptypes.string,
  instagramUrl: proptypes.string,
  websiteUrl: proptypes.string,
  dribbbleUrl: proptypes.string,
  linkedinUrl: proptypes.string,
  twitterUrl: proptypes.string,
  featuredImage: proptypes.shape({
    aspectRatio: proptypes.number,
    src: proptypes.string.isRequired,
    srcSet: proptypes.string.isRequired,
    sizes: proptypes.string.isRequired,
    base64: proptypes.string,
    tracedSVG: proptypes.string,
    srcWebp: proptypes.string,
    srcSetWebp: proptypes.string,
    media: proptypes.string
  }).isRequired

}

export default Guest;