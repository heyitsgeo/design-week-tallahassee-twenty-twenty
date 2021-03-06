/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async({ page, actions: { deletePage }}) => {
  if (!!page.path.match(/^\/shop/) && process.env.GATSBY_SHOP_TURNED_ON === 'false') {
    console.log('Shop feature is disabled, removing from build.')
    deletePage(page);
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      featuredImage: File @fileByRelativePath
      thumbnail: File @fileByRelativePath
    }

    type Fields {
      slug: String
    }
  `)
}
