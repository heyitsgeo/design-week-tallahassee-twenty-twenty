import React from 'react';
import SEO from '../components/seo';
import DonateOrVolunteerPopout from '../components/DonateOrVolunteerPopout';

import { Section } from '../components/Section';

import swagStyles from './swag.module.css';
import {
  PageTitle,
  PageHeader,
  PageDescription,
  DefaultLayout
} from '../components/layout';
import Card from '../components/Card';
import { graphql } from 'gatsby';
import Img from 'gatsby-image/index';

const Swag = ({ data }) => {

  const {
    allMarkdownRemark
  } = data;

  const swagItems = allMarkdownRemark.edges
    .map(edge => ({
      id: edge.node.id,
      html: edge.node.html,
      downloadPath: edge.node.frontmatter.downloadPath,
      name: edge.node.frontmatter.name,
      featuredImage: edge.node.frontmatter.featuredImage &&
        edge.node.frontmatter.featuredImage.childImageSharp &&
        edge.node.frontmatter.featuredImage.childImageSharp.fluid,
    }));

  return (
    <DefaultLayout>
      <SEO title="Episodes" description={"Design Week Tallahassee"}/>
      <Section color="cream">
        <div className={swagStyles.container}>
          <PageHeader>
            <PageTitle>Digital Swag</PageTitle>
            <PageDescription>Our swag bag is now digital check back often to make sure you download them all.</PageDescription>
          </PageHeader>
          <div className={swagStyles.cards}>
            {swagItems.map(swagItem => (
              <Card key={swagItem.id}>
                <Card.Header>{swagItem.name}</Card.Header>
                <Card.Body>
                  <div className={swagStyles.imageContainer}>
                    <Img fluid={swagItem.featuredImage} className={swagStyles.img} />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className={swagStyles.collectRow}>
                    <a className={swagStyles.btn} href={swagItem.downloadPath} download>
                      <span>Collect</span>
                    </a>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <DonateOrVolunteerPopout style={{bottom: 0, right: 0, position: 'fixed', margin: '1em', width: '320px'}}/>
    </DefaultLayout>
  )
}

export default Swag;

export const query = graphql`
  query SwagQuery {
      allMarkdownRemark(
        filter: { frontmatter: { postType: { eq: "swag" } } }
      ) {
        edges {
          node {
          id,
          html
          frontmatter {
              name,
              downloadPath,
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
`;
