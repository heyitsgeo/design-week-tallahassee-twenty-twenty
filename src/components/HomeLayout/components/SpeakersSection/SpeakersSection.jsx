import React from 'react';
import { Section } from '../../../Section';
import chattySkull from '../../../../../content/images/skull-animation.gif';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import './SpeakersSection.scss';
import Guest from '../../../guest';

const SpeakersSection = ({ data }) => {
  const {
    allMarkdownRemark,
    pencilIllustration
  } = data;

  const guests = allMarkdownRemark.edges
    .map(edge => ({
      id: edge.node.id,
      title: edge.node.frontmatter.title,
      name: edge.node.frontmatter.name,
      websiteUrl: edge.node.frontmatter.websiteUrl,
      websiteAltUrl: edge.node.frontmatter.websiteAltUrl,
      instagramUrl: edge.node.frontmatter.instagramUrl,
      facebookUrl: edge.node.frontmatter.facebookUrl,
      linkedinUrl: edge.node.frontmatter.linkedinUrl,
      dribbbleUrl: edge.node.frontmatter.dribbbleUrl,
      twitterUrl: edge.node.frontmatter.twitterUrl,
      vimeoUrl: edge.node.frontmatter.vimeoUrl,
      email: edge.node.frontmatter.email,
      featuredImage: edge.node.frontmatter.featuredImage &&
        edge.node.frontmatter.featuredImage.childImageSharp &&
        edge.node.frontmatter.featuredImage.childImageSharp.fluid,
    }));

  return (
    <Section color="cream" transitionTop={true}>
      <div id="speakers" className="SpeakersSection-content">
        <div className="SpeakersSection-illustration-pencil">
          <Img fluid={pencilIllustration.childImageSharp.fluid} />
        </div>
        <div className="SpeakersSection-illustration-skull">
          <img src={chattySkull} alt="chatty skull animation"/>
        </div>
        <h2 className='SpeakersSection-title'>Speakers</h2>
        <p className="SpeakersSection-blurb">Wanna know who's on? Get to know our creative and inspiring guests who have made Design Week Extended Edition possible. They
          will bring their experiences, skills, and lessons they’ve learned along the way to share with us every week.</p>
          <div className="SpeakersSection-speakers">
            {guests.map(guest => (
              <Guest
                key={guest.id}
                name={guest.name}
                title={guest.title}
                websiteUrl={guest.websiteUrl}
                websiteAltUrl={guest.websiteAltUrl}
                facebookUrl={guest.facebookUrl}
                dribbbleUrl={guest.dribbbleUrl}
                instagramUrl={guest.instagramUrl}
                linkedinUrl={guest.linkedinUrl}
                twitterUrl={guest.twitterUrl}
                vimeoUrl={guest.vimeoUrl}
                featuredImage={guest.featuredImage}
                email={guest.email}
              />
              )
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
        allMarkdownRemark(
          sort: { order: ASC, fields: frontmatter___name },
          filter: { frontmatter: { postType: { eq: "guest" } } }
        ) {
          edges {
            node {
            id,
            frontmatter {
              name,
              title,
              websiteUrl,
              websiteAltUrl,
              dribbbleUrl,
              facebookUrl,
              instagramUrl,
              linkedinUrl,
              twitterUrl,
              vimeoUrl,
              email,
              featuredImage {
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
        pencilIllustration: file(relativePath: {eq: "loopy-pencil.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <SpeakersSection data={data} {...props} />}
  />
)
