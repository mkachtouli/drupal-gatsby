/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
// Create a slug for each news and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => { 
  const { createNodeField } = actions
  if (node.internal.type === `node__actualites`) {
    const id = node.id
    createNodeField({
      node,
      name: `id`,
      value: id,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const newsTemplate = path.resolve(`src/templates/newsitem.js`)
  // Query for news nodes to use in creating pages.
  return graphql(
    `
      {
        news: allNodeActualites {
            edges {
              node {
                drupal_internal__nid
                internal {
                  type
                }
                id
              }
            }
          }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages for each news.
    result.data.news.edges.forEach(({ node }) => {
      createPage({
        path: `/news/`+node.drupal_internal__nid,
        component: newsTemplate,
        context: {
          //slug: `/news/`+node.drupal_internal__nid,
          id: node.id
        },
      })
    })
  })
}

