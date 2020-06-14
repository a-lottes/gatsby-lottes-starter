import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/elements/seo"
import Title from "../components/elements/title"

import "./team.scss"

class Team extends React.Component {
  render() {
    const data = this.props.data.allTeamCsv.edges
    const allImageContent = this.props.data.allImageContent.edges
    for (let x = 0; x < data.length; x++) {
      data[x].allImageContent = allImageContent.find(i => i.node.fluid.originalName === data[x].node.image)
    }
    return (
      <Layout>
        <SEO title="Gatsby Lottes Starter Team" />
        <Title title="Team with CSV Data Example" />
        <div className="container">
          <main>
            <h2>Our Team</h2>
            <p>Welcome to the Team page</p>
            <div className="card-row">
              {data.map((row, i) => (
                <div className="card" key={`${row.node.id}-${i}`}>
                  <Img className="card-image" fluid={row.allImageContent.node.fluid} />
                  <div className="card-footer">
                    <h3 className="card-title">{row.node.name}</h3>
                    <p className="card-text">{row.node.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}

export default Team

export const IndexQuery = graphql`
  query {
    allTeamCsv: allTeamCsv {
      edges {
        node {
          id
          gender
          image
          name
          title
        }
      }
    }
    allImageContent: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 300) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`