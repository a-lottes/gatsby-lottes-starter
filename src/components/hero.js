/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

function Hero() {

  return (
    <section className="clearfix">
		<div className="container">
			<div className="section-left">
				<h1 className="section-title">Lorem ipsum dolor sit amet.</h1>
				<h5 className="section-tagline">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
			</div>
			<div className="section-right">
				<button className="learn-more">Learn more</button>
			</div>
		</div>
	</section>
  )
}


export default Hero
