import React from 'react';
import SEO from '../components/seo';
import DonateOrVolunteerPopout from '../components/DonateOrVolunteerPopout';

import { Section } from '../components/Section';

import shopStyles from './shop.module.css';

import {
  PageTitle,
  PageHeader,
  PageDescription,
  DefaultLayout
} from '../components/layout';
import { graphql } from 'gatsby';
import { Product } from '../components/Product';

const Shop = ({ data }) => {
  const {
    allMarkdownRemark
  } = data;

  const products = allMarkdownRemark.edges.map(edge => {
    const {
      node
    } = edge;

    return  {
      id: node.id,
      itemName: node.frontmatter.itemName,
      itemId: node.frontmatter.itemId,
      itemPrice: node.frontmatter.itemPrice,
      itemDescription: node.frontmatter.itemDescription,
      itemSizes: node.frontmatter.itemSizes,
      year: node.frontmatter.year,
      dimensions: node.frontmatter.dimensions && node.frontmatter.dimensions[0],
      featuredImage: node.frontmatter.thumbnail &&
        node.frontmatter.thumbnail.childImageSharp &&
        node.frontmatter.thumbnail.childImageSharp.fluid,
    }
  });

  return (
    <DefaultLayout>
      <SEO title="Shop" description={"Design Week Tallahassee"}/>
      <Section color="aqua">
        <div className={shopStyles.shop__container}>
          <PageHeader>
            <PageTitle>Shop</PageTitle>
            <PageDescription>We have this years latest merch available for purchase as well as some retro things from the past three Design Weeks.</PageDescription>
          </PageHeader>
          <div className={shopStyles.shop__products}>
            {
              products.map(product => (
                <Product
                  key={product.id}
                  className={shopStyles.shop__product}
                  itemName={product.itemName}
                  itemId={product.itemId}
                  itemPrice={product.itemPrice}
                  itemDescription={product.itemDescription}
                  itemSizes={product.itemSizes}
                  dimensions={product.dimensions}
                  year={product.year}
                  featuredImage={product.featuredImage}
                />
              ))
            }
          </div>
        </div>
      </Section>
      <DonateOrVolunteerPopout style={{bottom: 0, right: 0, position: 'fixed', margin: '1em', width: '320px'}}/>
    </DefaultLayout>
  )
}

export default Shop;

export const query = graphql`
  query ShopQuery {
      allMarkdownRemark(
        filter: { frontmatter: { postType: { eq: "product" } } },
        sort: { order: [DESC, ASC, ASC], fields: [frontmatter___year, frontmatter___sortPriority, frontmatter___itemName]}
      ) {
        edges {
          node {
          id,
          frontmatter {
              itemName
              itemId
              itemPrice
              itemDescription
              itemSizes
              dimensions {
                weight
              }
              year
              thumbnail {
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
