import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Testimonials() {
  return (
    <StaticQuery
      query={graphql`
        query TestimonialsQuery {
          allTestimonialsCsv {
            edges {
              node {
                testimotial
                name
                image
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {
            data.allTestimonialsCsv.edges.map((testimotial, i) => (
              <div key={`${testimotial.node.name}-${i}`}>
                <span>{testimotial.node.name}</span>
                <span>{testimotial.node.image}</span>
                <span>{testimotial.node.testimotial}</span>
              </div>
            ))
          }
        </>
      )}
    />
  )
}
