import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Section } from '../../../Section';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './TempHeroSection.scss';

const TempHeroSection = ({data}) => (
  <Section color="cream" fillScreen={true}>
    <div className="TempHeroSection-content">
      <div className="hero-image-container">
        <Img fluid={data.heroImage.childImageSharp.fluid} />
        <h4 className={`dates announcement`}><span className="underline">Going virtual</span> August 21ST &mdash; December 18TH 2020</h4>
        <div className='action-links'>
          <a
            className='btn facebook-link'
            href="https://www.facebook.com/designweektally/?__tn__=%2Cd%2CP-R&eid=ARAjb_Pt1Dxbn7CUSTIxKe54SGNbMMQ-FRMboMBs5JZdZHMgs4OiSDZWblnEzb46zsk_phtzRE5TGBtf"
            target="_blank"
            rel="noopener noreferrer">
            <span>Watch Live</span>
          </a>
          <Link className='btn episodes-link' to="/watch"><span>Reruns</span></Link>
        </div>
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
