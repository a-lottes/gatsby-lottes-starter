import React from "react"

function Title({ title }) {
	return (
		<section className="clearfix">
			<div className="container">
				<h2 className="section-title">{title}</h2>
			</div>
		</section>
	)
}

export default Title
