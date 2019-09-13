import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="App">
        <h2>Welcome Drupal & Gatsby site "MK version"</h2>
        <Link to="/news">Go to news page</Link>
      </div>
  </Layout>




)

export default IndexPage
