import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useText } from '../theme/common';
import useStyles from './about-style';
import reward2 from '../../public/images/profile/reward2.png';
import reward3 from '../../public/images/profile/node.png';
import reward4 from '../../public/images/profile/nextjs.png';
import avatar from '../../public/images/avatars/avatar-image.png';
function About(props) {
  const theme = useTheme();
  const classes = useStyles();
  const text = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12} />
          <Grid item lg={9} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <figure>
                    <img src={reward3} alt='badge' />
                  </figure>
                  <Typography component='p' className={text.paragraph}>
                    Back End
                  </Typography>
                  <Typography variant='h6'>Node Js</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <img src={reward2} alt='badge' />
                  </figure>
                  <Typography component='p' className={text.paragraph}>
                    Frame Work
                  </Typography>
                  <Typography variant='h5'>React</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <img src={reward4} alt='badge' />
                  </figure>
                  <Typography component='p' className={text.paragraph}>
                    Frame Work
                  </Typography>
                  <Typography variant='h5'>Next JS</Typography>
                </div>
              </div>

              <Hidden mdUp>
                <div className={classes.socmed}>
                  <IconButton
                    aria-label='FaceBook'
                    className={classes.margin}
                    size='small'>
                    <a
                      rel='noopener noreferrer'
                      href='https://www.facebook.com/majid.vezvaee'
                      target='_blank'>
                      <i className='ion-social-facebook' />
                    </a>
                  </IconButton>
                  <IconButton
                    aria-label='Twitter'
                    className={classes.margin}
                    size='small'>
                    <a
                      rel='noopener noreferrer'
                      href='https://twitter.com/MVezvaee'
                      target='_blank'>
                      <i className='ion-social-twitter' />
                    </a>
                  </IconButton>
                  <IconButton
                    aria-label='Delete'
                    className={classes.margin}
                    size='small'>
                    <a
                      rel='noopener noreferrer'
                      href='https://www.instagram.com/vezvaee/'
                      target='_blank'>
                      <i className='ion-social-instagram' />
                    </a>
                  </IconButton>
                  <IconButton
                    aria-label='Delete'
                    className={classes.margin}
                    size='small'>
                    <a
                      rel='noopener noreferrer'
                      href='https://www.linkedin.com/in/majid-vezvaee-3a764371/'
                      target='_blank'>
                      <i className='ion-social-linkedin' />
                    </a>
                  </IconButton>
                </div>
                <Typography variant='h5'>
                  I create an efficient UI mobile or web design also UX research
                  to make sure that I get what people needs and strategy for
                  interaction design.
                </Typography>
              </Hidden>
              <Paper className={classes.photo}>
                <figure>
                  <img src={avatar} alt='avatar' />
                </figure>
                <span className={classes.frame} />
              </Paper>
            </div>
            <div className={classes.line} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withTheme(About);
