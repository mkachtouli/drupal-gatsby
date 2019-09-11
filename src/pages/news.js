import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const news = ({ data }) => (
  <Layout>
    <SEO title="News" />
    <div>
        {data.allNodeActualites.edges.map(({node}) => {
            var dots = "";
            if (node.body.processed.length > 100) {
              var dots = "...";
            }
            return (
                <div key={node.id}>
                    <h2>{node.title}</h2>
                <div dangerouslySetInnerHTML={{__html:node.body.processed.substring(0, 100) + dots }} />
                
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
      limit: 3
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
            id
          }
        }
    }
  }
`


