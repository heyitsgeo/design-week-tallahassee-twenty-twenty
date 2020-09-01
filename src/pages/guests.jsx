import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Section } from '../components/Section';
import DonateOrVolunteerPopout from '../components/DonateOrVolunteerPopout';

import guestStyles from './guests.module.css';
import { graphql } from 'gatsby';
import Guest from '../components/guest';

const Guests = ({ data }) => {
  const {
    allMarkdownRemark
  } = data;

  const guests = allMarkdownRemark.edges
    .map(edge => ({
      id: edge.node.id,
      title: edge.node.frontmatter.title,
      name: edge.node.frontmatter.name,
      websiteUrl: edge.node.frontmatter.websiteUrl,
      instagramUrl: edge.node.frontmatter.instagramUrl,
      facebookUrl: edge.node.frontmatter.facebookUrl,
      linkedinUrl: edge.node.frontmatter.linkedinUrl,
      dribbbleUrl: edge.node.frontmatter.dribbbleUrl,
      twitterUrl: edge.node.frontmatter.twitterUrl,
      featuredImage: edge.node.frontmatter.featuredImage &&
        edge.node.frontmatter.featuredImage.childImageSharp &&
        edge.node.frontmatter.featuredImage.childImageSharp.fluid,
    }));

  console.log(guests);

  return (
    <Layout>
      <SEO title="Episodes" description={"Design Week Tallahassee"}/>
      <Section color="cream">
        <div className={guestStyles.container}>
          <h1>Guests</h1>
          <h4>Wanna know who's on? Get to know our creative and inspiring guests who have Design Week Extended Edition possible.</h4>
        </div>
        <div className={guestStyles.guestsContainer}>
          {guests.map(guest => (
            <Guest
              key={guest.id}
              name={guest.name}
              title={guest.title}
              websiteUrl={guest.websiteUrl}
              facebookUrl={guest.facebookUrl}
              dribbbleUrl={guest.dribbbleUrl}
              instagramUrl={guest.instagramUrl}
              linkedinUrl={guest.linkedinUrl}
              twitterUrl={guest.twitterUrl}
              featuredImage={guest.featuredImage}
              />
            )
          )}
        </div>
      </Section>
      <DonateOrVolunteerPopout style={{bottom: 0, right: 0, position: 'fixed', margin: '1em', width: '320px'}}/>
    </Layout>
  )
}

export const query = graphql`
  query GuestsQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___name },
      filter: { frontmatter: { posttype: { eq: "guest" } } }
    ) {
      edges {
        node {
          id,
          frontmatter {
            name,
            title,
            websiteUrl,
            dribbbleUrl,
            facebookUrl,
            instagramUrl,
            linkedinUrl,
            twitterUrl,
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
  }
`

export default Guests;