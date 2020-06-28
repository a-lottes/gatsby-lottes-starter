import React from "react"

import Layout from "../components/layout/layout"
import Image from "../components/image/"
import SEO from "../components/seo/"
import Hero from "../components/Hero/"
import Testimonials from "../components/testimonials/"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section className="fw-area">
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
    </section>
    <section className="fw-area">
      <Testimonials />
    </section>
  </Layout>
)

export default IndexPage
