import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  active: {
    border: "4px solid white",
  },
}))

export default function Nav() {
  
  const classes = useStyles()
  return (
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link exact="true" to="/" activeClassName={classes.active}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/mywork" activeClassName={classes.active}>
              My work
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/vita" activeClassName={classes.active}>
              Vita
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/studio" activeClassName={classes.active}>
              studio
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
