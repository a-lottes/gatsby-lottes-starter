import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  handleChange = e => {
    if (e.target.name === "active") {
      this.setState({ showMenu: e.target.checked })
    }
  };

  render() {
    const { siteTitle } = this.props
    return (
      <>
        <header className={'clearfix'}>
          <div
            className={'container'}
          >
            <div className={'header-left'}>
              <h1>
                <Link to="/">{siteTitle}</Link>
              </h1>
            </div>
            <div className={'header-right'}>
              <label htmlFor="open">
                <div id="js-hamburger" className={'hamburger hidden-desktop' + (this.state.showMenu ? ' active' : '')}>
                  <div className="hamburger__inner">
                    <div className="hamburger__bars hamburger__bars--1"></div>
                    <div className="hamburger__bars hamburger__bars--2"></div>
                    <div className="hamburger__bars hamburger__bars--3"></div>
                    <div className="hamburger__bars hamburger__bars--4"></div>
                  </div>
                </div>
              </label>
              <input
                type="checkbox" name="active" id="open"
                defaultChecked={this.state.showMenu}
                onClick={this.handleChange}
              />
              <nav>
                <Link to="/markdown-page/" activeClassName={'active'}>Markdown Page</Link>
                <Link to="/javascript-page/" activeClassName={'active'}>JavaScript Page</Link>
                <Link to="/team/" activeClassName={'active'}>Team</Link>
                <Link to="/typescript-page/" activeClassName={'active'}>TypeScript Page</Link>
              </nav>
            </div>
          </div>
        </header>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
