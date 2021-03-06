const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Design Week Tallahassee`,
    description: `Tallahassee's 2020 Design Week.`,
    author: `Geo Stokes`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ['jaf-herb:n4,n7', 'jaf-herb-condensed:n4,n7', 'rift:n4,i4,n5,i5,n6,i6,n7,i7'],
          urls: ['https://use.typekit.net/cpg7nab.css']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_API_KEY
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `content`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: path.join(__dirname, `content`, `posts`)
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `design-week-tallahassee`,
        short_name: `design-week-tallahassee`,
        start_url: `/`,
        icon: path.join(__dirname, `content`, `images`, `favicon.png`), // This path is relative to the root of the site.
      },
    },
  ],
};
