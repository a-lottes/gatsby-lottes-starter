import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/elements/seo"
import Title from "../components/elements/title"

const SecondPage = () => (
  <Layout>
    <SEO title="JavaScript Page" />
    <Title title="JavaScript Page Example" />
    <div className="container">
      <main>
        <h2>This is a JavaScript page-template</h2>
        <p>Welcome to page</p>
        <Link to="/">Go back to the homepage</Link>
      </main>
    </div>
  </Layout>
)

export default SecondPage
