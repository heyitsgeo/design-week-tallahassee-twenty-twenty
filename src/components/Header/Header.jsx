import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navigation from './components/Navigation';
import './header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/blue-logo.png" }) {
        childImageSharp {
          fixed(width: 142) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <header className='Header'>
      <a className="logo" href={`/`}>
        <Img className='logo' fixed={data.file.childImageSharp.fixed}/>
      </a>
      <h3 className="header-name">Design Week Tallahassee</h3>
      <Navigation />
    </header>
  );
};

export default Header;
