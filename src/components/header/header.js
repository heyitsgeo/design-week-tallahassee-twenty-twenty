import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Navigation } from './components/navigation';
import './header.scss';

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/blue-logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header className='Header'>
      <Img className='logo' fixed={data.file.childImageSharp.fixed}/>
      <Navigation></Navigation>
    </header>
  );
}
