import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
      swagBagIllustration: file(relativePath: {eq: "swag-bag.png"}) {
        childImageSharp {
          fixed(width: 40) {
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
      <h3 className="header-name">Design <span className='strike-through'>Week</span> Tallahassee</h3>
      <div className="navigation-actions">
        <Link to="/swag" className="swag-bag-link">
          <Img fixed={data.swagBagIllustration.childImageSharp.fixed}/>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
