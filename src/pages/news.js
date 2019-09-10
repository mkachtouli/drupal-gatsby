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
            // console.log('test : ' + node.title);
            return (
                <div key={node.id}>
                    <h2>{node.title}</h2>
                    <div dangerouslySetInnerHTML={{__html:node.body.processed}} />
                    {/* <Img
                        fixed={node.relationships.field_photos.localFile.childImageSharp.original}
                        alt="Gatsby Docs are awesome"
                    /> */}
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


