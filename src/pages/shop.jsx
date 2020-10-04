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
      featuredImage: node.frontmatter.featuredImage &&
        node.frontmatter.featuredImage.childImageSharp &&
        node.frontmatter.featuredImage.childImageSharp.fluid,
    }
  });

  // const snipcart = window.Snipcart;
  //
  // if (snipcart) {
  //   snipcart.events.on('snipcart.initialized', (state) => {
  //     const { cart } = state;
  //
  //     if (cart.items) {
  //       const { items } = cart.items;
  //
  //       if (items) {
  //         items.forEach((item) => {
  //           snipcart.api.cart.items.remove(item.uniqueId);
  //         })
  //       }
  //     }
  //   });
  // }
  return (
    <DefaultLayout>
      <SEO title="Shop" description={"Design Week Tallahassee"}/>
      <Section color="aqua">
        <div className={shopStyles.shop__container}>
          <PageHeader>
            <PageTitle>Shop</PageTitle>
            <PageDescription>Our swag bag is now digital check back often to make sure you download them all.</PageDescription>
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
                  featuredImage={product.featuredImage}
                />
              ))
            }
          </div>
          {/*<section>*/}
          {/*  <h2>Silver Stacking Ring</h2>*/}
          {/*  <p>$19.99</p>*/}
          {/*  <p>Wear one or seventeen! These rings are fun to mix and match.</p>*/}
          {/*  <button*/}
          {/*    className="snipcart-add-item"*/}
          {/*    data-item-id="silver-stacking-ring"*/}
          {/*    data-item-price="19.99"*/}
          {/*    data-item-url="/"*/}
          {/*    data-item-name="Silver Stacking Ring"*/}
          {/*  >*/}
          {/*    Add to cart*/}
          {/*  </button>*/}
          {/*</section>*/}
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
        filter: { frontmatter: { postType: { eq: "product" } } }
      ) {
        edges {
          node {
          id,
          frontmatter {
              itemName,
              itemId,
              itemPrice
              itemDescription,
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
