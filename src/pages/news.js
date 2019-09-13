import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


var dots = "";
const news = ({ data }) => (

  <Layout>
    <SEO title="News" />
    <div >
      {data.allNodeActualites.edges.map(({node}) => {
          if (node.body.processed.length > 100) { dots = "...";}
          else{dots = "";}
          return (
            <div key={node.drupal_internal__nid}>
              <h2>{node.title}</h2>
              <div dangerouslySetInnerHTML={{__html:node.body.processed.substring(0, 100) + dots }} />
              <Link to={'/news/'+node.drupal_internal__nid}>Show more</Link>
              <hr/>
            </div>
          )
      })}
    </div>
  </Layout>

)

export default news


export const query = graphql`
  query {
    allNodeActualites(
      sort: {
        fields: created
        order: DESC
      }
      limit: 10
      ) {
        edges {
          node {
            title
            body {
              format
              processed
              summary
              value
            }
            drupal_internal__nid
          }
        }
    }
  }
`


