import React, { useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import ReactWOW from 'react-wow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { useText } from '../theme/common';
import useStyles from './timeline-style';
import brand from '../../public/text/brand';
import LogoNodejs from 'react-ionicons/lib/LogoNodejs';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoJavascript from 'react-ionicons/lib/LogoJavascript';
import { SiReact, SiMongodb, SiMaterialUi } from 'react-icons/si/index';
function Timeline(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 200);
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            <Hidden mdDown>
              <Typography variant='h2' className={classes.nameDeco}>
                {brand.profile.name}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography
                  variant='h5'
                  className={clsx(classes.title, text.subtitle)}>
                  WORK EXPERIENCE
                </Typography>
                <ul>
                  <li>
                    <ReactWOW
                      animation='fadeInLeftShort'
                      delay='0.2s'
                      duration='0.3s'>
                      <div>
                        <Typography
                          variant='h3'
                          gutterBottom
                          className={text.subtitle2}>
                          Front end Developer
                        </Typography>
                        <Typography gutterBottom>
                          at Third Company at TecFlyBird
                        </Typography>
                        <Typography className={classes.time}>
                          2020 - Present
                        </Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW
                      animation='fadeInLeftShort'
                      offset={100}
                      delay='0.3s'
                      duration='0.3s'>
                      <div>
                        <Typography
                          variant='h3'
                          gutterBottom
                          className={text.subtitle2}>
                          Implementation and IT Manager
                        </Typography>
                        <Typography gutterBottom>
                          at Third Company at Insource Asia
                        </Typography>
                        <Typography className={classes.time}>
                          2018 - 2020
                        </Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW
                      animation='fadeInLeftShort'
                      offset={200}
                      delay='0.4s'
                      duration='0.3s'>
                      <div>
                        <Typography
                          variant='h3'
                          gutterBottom
                          className={text.subtitle2}>
                          Free lance developer
                        </Typography>
                        <Typography gutterBottom>at Own</Typography>
                        <Typography className={classes.time}>
                          2015 - Present
                        </Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  {/* <li>
                    <ReactWOW
                      animation='fadeInLeftShort'
                      offset={300}
                      delay='0.5s'
                      duration='0.3s'>
                      <div>
                        <Typography
                          variant='h3'
                          gutterBottom
                          className={text.subtitle2}>
                          UI/UX Designer
                        </Typography>
                        <Typography gutterBottom>at Hami Company</Typography>
                        <Typography className={classes.time}>
                          2009 - 2011
                        </Typography>
                      </div>
                    </ReactWOW>
                  </li> */}
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography
                  variant='h5'
                  className={clsx(classes.title, text.subtitle)}>
                  SKILL AND EXPERTISE
                </Typography>
                <ReactWOW
                  animation='fadeIn'
                  delay='0.4s'
                  duration='0.3s'
                  callback={handlePlay}>
                  <ul>
                    <li>
                      <div className={classes.textIcon}>
                        <SiReact color='black' />
                        <Typography variant='h6' className={text.subtitle2}>
                          React Js Frontend
                        </Typography>
                      </div>
                      <LinearProgress
                        variant='determinate'
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <LogoNodejs />
                        <Typography variant='h6' className={text.subtitle2}>
                          Node JS Backend
                        </Typography>
                      </div>
                      <LinearProgress
                        variant='determinate'
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <SiMongodb color='black' />
                        <Typography variant='h6' className={text.subtitle2}>
                          Mongo DataBase
                        </Typography>
                      </div>
                      <LinearProgress
                        variant='determinate'
                        value={play ? 70 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <SiMaterialUi color='black' />
                        <Typography variant='h6' className={text.subtitle2}>
                          Material UI
                        </Typography>
                      </div>
                      <LinearProgress
                        variant='determinate'
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <LogoJavascript />
                        <Typography variant='h6' className={text.subtitle2}>
                          Javascript Prototyping
                        </Typography>
                      </div>
                      <LinearProgress
                        variant='determinate'
                        value={play ? 60 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <LogoGithub color='black' />
                        <Typography variant='h6' className={text.subtitle2}>
                          Version Control
                        </Typography>
                      </div>
                      <LinearProgress
                        variant='determinate'
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                  </ul>
                </ReactWOW>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withTheme(Timeline);
