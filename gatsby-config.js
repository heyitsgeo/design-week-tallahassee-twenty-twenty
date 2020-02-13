module.exports = {
  siteMetadata: {
    title: `Design Week Tallahassee`,
    description: `Tallahassee's 2020 Design Week.`,
    author: `Geo Stokes`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speakers`,
        path: `${__dirname}/src/images/speakers`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/workshops`,
        name: 'workshops'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `design-week-tallahassee`,
        short_name: `design-week-tallahassee`,
        start_url: `/`,
        // TODO: Add this.
        //icon: ``, // This path is relative to the root of the site.
      },
    },
  ],
};
