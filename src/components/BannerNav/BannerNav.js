import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SideNavigation from '../SideNavigation/SideNavigation';
import brand from '../../public/text/brand';
import { useText } from '../theme/common';
import Settings from '../Settings/Settings';
import useStyles from './banner-style';
import FacebookIcon from 'react-ionicons/lib/LogoFacebook';
import TwitterIcon from 'react-ionicons/lib/LogoTwitter';
import InstagramIcon from 'react-ionicons/lib/LogoInstagram';
import LinkedinIcon from 'react-ionicons/lib/LogoLinkedin';

function BannerNav(props){
  const theme = useTheme();
  const text = useText();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const {onToggleDark} = props;
  return(
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            <Hidden mdDown>
              <SideNavigation />
            </Hidden>
          </Grid>
          <Grid item lg={10} xs={12}>
            <div className={classes.banner}>
              <div className={classes.cover}>
                <div className={classes.figure}>
                  <img src={brand.profile.cover} alt="cover" />
                  <div className={classes.overlay} />
                </div>
              </div>
              <Hidden >
                <div className={classes.settingIcon}>
                  <Settings toggleDark={onToggleDark}  />
                </div>
              </Hidden>
              <div className={classes.text}>
                <Typography variant="h4" className={text.title2}>
                  Hi,
                </Typography>
                <Typography variant="h2" className={text.title}>
                I am &nbsp;MJ, and I do Javascript developement
                </Typography>
                <Hidden smDown>
                  <Typography variant="h5" className={text.subtitle2}>
                    I'm full stack developer in Javascript I create web application
                    base on Meteor js and React.
                    I do mobile application with React-Native.
                  </Typography>
                  <div className={classes.socmed}>
                  <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <a rel="noopener noreferrer" href="https://www.facebook.com/majid.vezvaee" target="_blank">
                      <FacebookIcon fontSize="34" />
                    </a>
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <a rel="noopener noreferrer" href="https://twitter.com/MVezvaee" target="_blank">
                      <TwitterIcon fontSize="34" />
                    </a>
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <a rel="noopener noreferrer" href="https://www.instagram.com/vezvaee/" target="_blank">
                      <InstagramIcon fontSize="34" />
                    </a>
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/majid-vezvaee-3a764371/" target="_blank">
                      <LinkedinIcon fontSize="34" />
                    </a>
                    </IconButton>
                  </div>
                </Hidden>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

BannerNav.propTypes ={
  onToggleDark: PropTypes.func.isRequired,
}

export default withTheme(BannerNav)