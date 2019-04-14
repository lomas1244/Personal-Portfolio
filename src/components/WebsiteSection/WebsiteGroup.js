import React from "react"
import "./WebsiteGroup.css"
import styled from "styled-components"

const WebContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 180px 40px;
`

const WebItemContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`

class WebsiteGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleScroll = event => {
    const scrollWebsite = window.pageYOffset

    if (scrollWebsite > 1200) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <WebContainer className="WebContainer">
        <WebItemContainer
          className={
            this.state.hasScrolled ? "WebItem WebItemScrolled" : "WebItem"
          }
        >
          <img
            className="WebImage"
            src={require("../../images/websiteScreens/noteWebsite.png")}
          />
        </WebItemContainer>
        <WebItemContainer className="WebItem" style={{ marginTop: "30px" }}>
          <img
            className="WebImage"
            src={require("../../images/websiteScreens/blumWebsite.png")}
          />
        </WebItemContainer>
        <WebItemContainer className="WebItem" style={{ marginTop: "60px" }}>
          <img
            className="WebImage"
            src={require("../../images/websiteScreens/aposWebsite.png")}
          />
        </WebItemContainer>
      </WebContainer>
    )
  }
}

export default WebsiteGroup
