import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="JavaScript Page" />
    <h2>This is a JavaScript page-template</h2>
    <p>Welcome to page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
