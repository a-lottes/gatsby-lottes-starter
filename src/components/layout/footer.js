import React from "react";
import { Link } from "gatsby";

import "./footer.scss"

class Footer extends React.Component {

  render() {
    return (
      <footer className={'clearfix'}>
        <div className={'container'}>
          <div className={'footer-left copyright'}>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://github.com/a-lottes/">a-lottes</a>
          </div>
          <div className={'footer-center'}>
            <span className={'footer-title'}>Documentation</span>
            <nav>
              <Link to="/markdown-page/" activeClassName={'active'}>Markdown Page</Link>
              <Link to="/javascript-page/" activeClassName={'active'}>JavaScript Page</Link>
              <Link to="/team/" activeClassName={'active'}>Team</Link>
              <Link to="/typescript-page/" activeClassName={'active'}>TypeScript Page</Link>
            </nav>
          </div>
          <div className={'footer-right'}>
            <span className={'footer-title'}>Example</span>
            <nav>
              <Link to="/markdown-page/" activeClassName={'active'}>Markdown Page</Link>
              <Link to="/javascript-page/" activeClassName={'active'}>JavaScript Page</Link>
              <Link to="/csv-data-page/" activeClassName={'active'}>CSV Data</Link>
              <Link to="/typescript-page/" activeClassName={'active'}>TypeScript Page</Link>
            </nav>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
