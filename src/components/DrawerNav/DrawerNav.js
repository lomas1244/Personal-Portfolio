import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import { Link } from "gatsby"
import "./DrawerNav.css"
import MouseOverPopover from "../../components/Popover/Popover"
import Card from "../Cards/Card"
import NavCard from "../NavCards/NavCards"

const drawerWidth = 240

const styles = theme => ({})

class PersistentDrawerLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      open: false,
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
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    const { classes, theme } = this.props
    const { open } = this.state

    return (
      <div className={classes.root}>
        <AppBar
          className={
            this.state.hasScrolled
              ? "NavContainer NavContainerScrolled"
              : "NavContainer"
          }
        >
          <Toolbar className="NavGroup">
            <div className="NavItems">
              <Link to="/">
                <img
                  src={require("../../images/logos/portfolioLogo.svg")}
                  width="45"
                />
              </Link>
              {/* <MouseOverPopover /> */}
              <div />
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
                style={{ justifySelf: "right" }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="persistant"
          anchor="right"
          open={open}
          className="NavDrawer"
          style={{ borderLeft: "none" }}
        >
          <div
            className={classes.drawerHeader}
            style={{
              padding: "1em",
              backgroundColor: "#ff5887",
              width: "20vw",
            }}
          >
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <List className="linkList">
            <Link to="/portfolio">
              <ListItem
                button
                className="NavDrawerItem"
                style={{ paddingLeft: "40px", color: " #d4145a" }}
              >
                Projects
              </ListItem>
            </Link>
            <Link to="/portfolio">
              <ListItem
                button
                className="NavDrawerItem"
                style={{ paddingLeft: "40px", color: " #d4145a" }}
              >
                Portfolio
              </ListItem>
            </Link>
            <Link to="/portfolio">
              <ListItem
                button
                className="NavDrawerItem"
                style={{ paddingLeft: "40px", color: " #d4145a" }}
              >
                Get in touch
              </ListItem>
            </Link>
            <Link to="/portfolio">
              <ListItem
                button
                className="NavDrawerItem"
                style={{ paddingLeft: "40px", color: " #d4145a" }}
              >
                Get in touch
              </ListItem>
            </Link>
            <Link to="/portfolio">
              <ListItem
                button
                className="NavDrawerItem"
                style={{ paddingLeft: "40px", color: " #d4145a" }}
              >
                Get in touch
              </ListItem>
            </Link>
          </List>
          {/* <div className="NavCardGroup">
            <NavCard />
            <NavCard />
            <NavCard />
          </div> */}
        </Drawer>
      </div>
    )
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft)
