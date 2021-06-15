import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
//import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

import Hidden from "@material-ui/core/Hidden"

import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import WorkIcon from "@material-ui/icons/Work"
import BrushIcon from "@material-ui/icons/Brush"
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople"
import HomeIcon from "@material-ui/icons/Home"
//import {HomeIcon} from '@material-ui/icons'
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm"

import { navigate } from "gatsby"

const linkStyle = {
  color: "black",
  textDecoration: "none",
  margin: "20px",
}
const divStyle = {
    width: '1px',
    height: '30px',
    background: 'black',
    marginLeft: '40px'
}
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}))

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: "Home", path: "/" },
          { name: "My work", path: "/mywork" },
          { name: "Send email", path: "/" },
          { name: "Vita", path: "/vita" },
          { name: "Studio", path: "/studio" },
        ].map((text, index) => (
          <ListItem button key={text.name} onClick={() => navigate(text.path)}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <WorkIcon />
              ) : index === 2 ? (
                <MailIcon />
              ) : index === 3 ? (
                <EmojiPeopleIcon />
              ) : (
                <BrushIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text.name} />
            
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      {/* <Typography>
                    <Link exact="true" to="/" style={linkStyle}>
                      Home
                    </Link>
                  </Typography>
                  <Typography>
                    <Link to="/mywork" style={linkStyle}>
                      My work
                    </Link>
                  </Typography>

                  <Typography>
                    <Link to="/vita" style={linkStyle}>
                      Vita
                    </Link>
                  </Typography>
                  <Typography>
                    <Link to="/studio" style={linkStyle}>
                      studio
                    </Link>
                  </Typography> 
      </List>*/}
    </div>
  )

  return (
    <div>
      {["top"].map(anchor => (
        <React.Fragment key={anchor}>
          <Hidden lgUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          <Hidden mdDown>
            <div style={{ display: "flex" }}>
              {[
                { name: "Home", path: "/" },
                { name: "My work", path: "/mywork" },
                { name: "Send email", path: "/" },
                { name: "Vita", path: "/vita" },
                { name: "Studio", path: "/studio" },
              ].map((text, index) => (
                <List>
                  <ListItem
                  style={{borderRight:  index !== 4 && '1px solid black'}}
                    button
                    key={text.name}
                    onClick={() => navigate(text.path)}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <HomeIcon />
                      ) : index === 1 ? (
                        <WorkIcon />
                      ) : index === 2 ? (
                        <MailIcon />
                      ) : index === 3 ? (
                        <EmojiPeopleIcon />
                      ) : (
                        <BrushIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  
                  </ListItem>
                </List>
              ))}
            </div>
          </Hidden>
        </React.Fragment>
      ))}
    </div>
  )
}
