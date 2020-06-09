import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "./testimonials.scss"

export default function Testimonials() {
  const [index, setIndex] = React.useState(0)

  const { allTestimonialsCsv, allImageContent } = useStaticQuery(
    graphql`
    query data {
      allTestimonialsCsv: allTestimonialsCsv {
        edges {
            node {
              testimotial
              name
              image
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
  )
  const length = allTestimonialsCsv.edges.length - 1
  const timer = setTimeout(() => { index === length ? setIndex(0) : setIndex(index + 1) }, 7500)
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
    clearTimeout(timer)
  }
  const handlePrevious = () => index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allTestimonialsCsv.edges[index]
  const imageforTestimanial = allImageContent.edges.find(
    x => x.node.fluid.originalName === node.image
  )
  return (
    <div className="container">
      <div key={`${node.name}-${index}`} className="fade-in testimonial">
        <span className="name">{node.name}</span>
        <span className="image">
          <Img fluid={imageforTestimanial.node.fluid} />
        </span>
        <i className="text">
          {node.testimotial}
          </i>
      </div>
      <div className="testimonial-nav">
        <button onClick={() => handlePrevious()} className="btn-prev"></button>
        <button onClick={() => handleNext()} className="btn-next"></button>
      </div>
    </div>
  )
}
