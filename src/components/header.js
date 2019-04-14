import { Link } from "gatsby"
import React from "react"
import "./Header.css"
import MouseOverPopover from "../components/Popover/Popover"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require("../images/logos/portfolioLogo.svg")}
              width="30"
            />
          </Link>
          <Link
            className={this.state.hasScrolled ? "HeaderScrolledLink" : ""}
            to="/courses"
          >
            Projects
          </Link>
          <Link
            className={this.state.hasScrolled ? "HeaderScrolledLink" : ""}
            to="/downloads"
          >
            Tools
          </Link>
          <Link to="/portfolio" style={{ justifySelf: "right" }}>
            <button>Portfolio</button>
          </Link>
          <MouseOverPopover>Join</MouseOverPopover>
        </div>
      </div>
    )
  }
}

export default Header
