import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Popover from "@material-ui/core/Popover"
import toRenderProps from "recompose/toRenderProps"
import withState from "recompose/withState"
import "../Avatar/Avatar.css"
import "./Popover.css"

const WithState = toRenderProps(withState("anchorEl", "updateAnchorEl", null))

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
})

function RenderPropsPopover(props) {
  const { classes } = props

  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl)
        return (
          <React.Fragment>
            <Typography
              aria-owns={open ? "render-props-popover" : undefined}
              className="avatarHover"
              aria-haspopup="true"
              variant="contained"
              onClick={event => {
                updateAnchorEl(event.currentTarget)
              }}
            >
              <div className="Avatar">
                <img src={require("../../images/avatar.jpeg")} />
              </div>
            </Typography>
            <Popover
              id="render-props-popover"
              open={open}
              anchorEl={anchorEl}
              onClose={() => {
                updateAnchorEl(null)
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes.typography}>
                <div className="hoverContainer">
                  <ul className="hoverItems">
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Subscribe</li>
                    <li>Get in touch</li>
                  </ul>
                </div>
              </Typography>
            </Popover>
          </React.Fragment>
        )
      }}
    </WithState>
  )
}

RenderPropsPopover.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RenderPropsPopover)
