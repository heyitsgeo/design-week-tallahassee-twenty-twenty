import React from 'react';
import Layout from '../components/layout';
import { Section } from '../components/Section';
import { graphql } from 'gatsby';
import Workshop from '../components/Workshop';

import '../styles/workshops.scss';

export function Workshops({data}) {
  const {
    workshops
  } = data;

  return (
    <Layout>
      <Section color="cream">
        <div className="WorkshopsPageContent">
          <h2 className="WorkshopsPageContent-page-title">Workshops</h2>
          <p className="WorkshopsPageContent-about">This is a spot for a lil' blurb or something if there's a lil' blurb we want to add about this section woohoo</p>
          {workshops.edges.map((edge, index) =>
            <Workshop key={edge.node.id} workshop={edge.node} direction={index % 2 === 0 ? 'right': 'left'}/>
            )}
        </div>
      </Section>
    </Layout>
  )
}

export default Workshops;

export const query = graphql`
  query {
    workshops: allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            featureImage {
              childImageSharp {
                fluid(maxWidth: 800) {
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
