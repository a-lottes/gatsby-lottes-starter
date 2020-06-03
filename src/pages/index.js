import React from "react"

import Layout from "../components/layout/layout"
import Image from "../components/elements/image"
import SEO from "../components/elements/seo"
import Hero from "../components/elements/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <div className="container">
      <main>
        <h2>Hi people</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </main>
    </div>
  </Layout>
)

export default IndexPage
