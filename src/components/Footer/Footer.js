import React from 'react';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import logo from '../../public/images/profile-logo.svg';
import brand from '../../public/text/brand';
import { useText } from '../theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Contact';

function Footer(props) {
  const classes = useStyles();
  const text = useText();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h3" className={text.title}>
                {brand.profile.name}
              </Typography>
              <Typography variant="h4" className={text.subtitle}>
                {brand.profile.title}
              </Typography>
            </div>
            <div className={classes.socmed}>
              <IconButton aria-label="Delete" className={classes.margin} size="small">
                <a rel="noopener noreferrer" href="https://www.facebook.com/majid.vezvaee" target="_blank">
                <i className="ion-social-facebook" />
                </a>
              </IconButton>
              <IconButton aria-label="Delete" className={classes.margin} size="small">
                <a rel="noopener noreferrer" href="https://twitter.com/MVezvaee" target="_blank">
                <i className="ion-social-instagram" />
                </a>
              </IconButton>
              <IconButton aria-label="Delete" className={classes.margin} size="small">
                <a rel="noopener noreferrer" href="https://www.instagram.com/vezvaee/" target="_blank">
                <i className="ion-social-twitter" />
                </a>
              </IconButton>
              <IconButton aria-label="Delete" className={classes.margin} size="small">
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/majid-vezvaee-3a764371/" target="_blank">
                <i className="ion-social-linkedin" />
                    </a>
              </IconButton>
            </div>
            <div className={classes.contact}>
              <Typography className={text.paragraph}>
              My personal contact
                <br />
                +66870624648
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={text.paragraph}>
                Say hello
                <br />
                nastaran.samui@gamil.com
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withTheme(Footer);
