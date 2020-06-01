import PropTypes from "prop-types"
import React from "react"

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  render() {
    return (
      <footer className={'clearfix'}>
        <div className={'container'}> 
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://n4.de">N4</a>
        </div>
      
    </footer>
    )
  }
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
