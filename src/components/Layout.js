import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Footer from "../components/Footer"
import { Link } from "gatsby"
import MyDrawer from "../components/mydrawer"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, Grid } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"

import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "../theme/theme"
import { Translate } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    background: "black",
  },
}))

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const linkStyle = {
  color: "black",
  textDecoration: "none",
  margin: "20px",
}

export default function Layout(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          //flex='1'
          //justify='space-between'
          style={{
            minHeight: "100vh",
            border: "0px solid purple",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          {/* <Footer /> */}
          <HideOnScroll {...props}>
            <AppBar>
              <Container>
                <Toolbar
                  style={{ justifyContent: "flex-end", height: "120px" }}
                >
                  <MyDrawer />
                </Toolbar>
              </Container>
            </AppBar>
          </HideOnScroll>

          <div style={{ border: "0px solid black", flex: '10'}}>
            {props.children}
          </div>

          <Footer />
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  )
}
