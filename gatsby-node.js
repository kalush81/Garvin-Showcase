const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  console.log('???===>>>', node.internal)
  if (node.internal.type === `ImageSharp`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  query {
    allImageSharp {
      nodes {
        fields {
          slug
        }
      }
    }
  }
  `)
  result.data.allImageSharp.nodes.forEach(( node ) => {
    createPage({
      path: `mywork${node.fields.slug}`,
      component: path.resolve(`./src/templates/image_page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}