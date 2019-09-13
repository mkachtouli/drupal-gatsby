import React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const news = ({ data }) => (
  
  <Layout>
    <SEO title="News" />
    <div>
      <h2>{data.news.title}</h2>
      <div dangerouslySetInnerHTML={{__html:data.news.body.processed }} />
      <hr/>
      <Link to="/news">All news</Link>
    </div>
  </Layout>
)

export default news

export const query = graphql`
  query($id: String!) {
    news : nodeActualites(id: {eq: $id}) {
      title
      body {
        processed
      }
    }
  }
`
