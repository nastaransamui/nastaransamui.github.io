import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Home from '@material-ui/icons/Home';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../public/images/avatars/avatar.jpg';
import WebhookIcon from '@material-ui/icons/WebSharp';

import Footer from './Footer';

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      background: theme.palette.secondary.main,
      margin: 0,
    },
    arrow: {
      color: '#fff',
    },
    title: {
      color: theme.palette.primary.light,
    },
    menuSliderContainer: {
      width: 250,
      background: theme.palette.primary.main,
      height: '100%',
    },
    avatar: {
      display: 'block',
      margin: '0.5rem auto',
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
    listItem: {
      color: '#fff',
      '&:hover': {
        '& .MuiSvgIcon-root': {
          fill: '#000',
        },
        color: '#000',
        background: theme.palette.secondary.main,
      },
    },
  };
});

const menuItems = [
  { listIcon: <Home />, listText: 'Home', listPath: '/' },
  { listIcon: <AssignmentInd />, listText: 'Resume', listPath: '/resume' },
  { listIcon: <Apps />, listText: 'Portfolio', listPath: '/portfolio' },
  {
    listIcon: <WebhookIcon />,
    listText: 'Specialities',
    listPath: '/specialities',
  },
  { listIcon: <ContactMail />, listText: 'Contact', listPath: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component='div'>
      <Avatar className={classes.avatar} src={avatar} alt='Majid Vezvaee' />
      <Divider sx={{ color: '#000' }} />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component='nav'>
        <AppBar position='static' className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
            <Typography variant='h5' className={classes.title}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
