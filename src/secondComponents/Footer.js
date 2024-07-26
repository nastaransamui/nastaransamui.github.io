import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  bottomNavContainer: {
    background: theme.palette.secondary.dark,
    height: '55px',
    overflow: 'hidden',
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.primary.main,
      '&:hover': {
        fill: '#000',
        fontSize: '1.8rem',
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
      <BottomNavigationAction icon={<GitHub />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
