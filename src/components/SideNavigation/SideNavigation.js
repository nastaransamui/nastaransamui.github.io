import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import logo from '../../public/logo512.png';
import useStyles from './sidenav-style';
import navMenu from './menu';
import '../../public/hamburger-menu.css';
import { withTheme } from '@material-ui/core';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

function SideNavigation(props) {
  const classes = useStyles();
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0], 160),
    createData(navMenu[1], '#' + navMenu[1]),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3], -40),
    createData(navMenu[4], '#' + navMenu[4]),
    createData(navMenu[5], '#' + navMenu[5]),
    createData(navMenu[6], '#' + navMenu[6]),
  ]);
  return (
    <div className={classes.navigation}>
      <Container fixed >
        <nav className={classes.navMenu}>
          <AnchorLink href="#home" className={classes.logo}>
            <img src={logo} alt="logo" />
          </AnchorLink>
          <List component="nav" className={classes.menu}>
            <Scrollspy
              items={navMenu}
              currentClassName="active"
            >
              {menuList.map(item => (
                <ListItem
                  key={item.id.toString()}
                  button
                  component={AnchorLink}
                  offset={item.offset || 0}
                  href={item.url}
                  classes={{ root: classes.link }}
                >
                  <ListItemText
                    classes={{ root: classes.text }}
                    primary={item.name}
                  />
                </ListItem>
              ))}
            </Scrollspy>
          </List>
        </nav>
      </Container>
    </div>
  );
}


export default withTheme(SideNavigation);
