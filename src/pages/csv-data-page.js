import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/elements/seo"
import Title from "../components/elements/title"

class ThirdPage extends React.Component {
  render() {
    const data = this.props.data.allExampleCsv.edges

    console.log(this.props)
    return (
      <Layout>
        <SEO title="Example with CSV Data" />
        <Title title="CSV Data Example" />
        <div className="container">
          <main>
            <h2>Hi from the Data page</h2>
            <p>Welcome to page 3</p>
            <table>
              <thead>
                <tr>
                  <th>Letter</th>
                  <th>ASCII Value</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={`${row.node.value} ${i}`}>
                    <td>{row.node.letter}</td>
                    <td>{row.node.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </Layout>
    )
  }
}

export default ThirdPage

export const IndexQuery = graphql`
  query {
    allExampleCsv {
      edges {
        node {
          letter
          value
        }
      }
    }
  }
`