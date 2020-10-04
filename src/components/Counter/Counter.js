import React, { useState } from 'react';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useText } from '../theme/common';
import useStyles from './counter-style';
import { withTheme } from '@material-ui/core';

function Counter(props) {
  const classes = useStyles();
  const text = useText();
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 500);
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" className={classes.root} spacing={6}>
          <Grid md={4} item>
            <ReactWOW animation="fadeIn" offset={300} callback={handlePlay}>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <i className="ion-ios-briefcase-outline" />
                  <Typography variant="h4" className={text.title2}>
                    {countup(12, play)}
                  </Typography>
                </div>
                <Typography variant="h6" className={text.subtitle2}>
                  Completed Project
                </Typography>
              </div>
            </ReactWOW>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <i className="ion-ios-time-outline" />
                <Typography variant="h4" className={text.title2}>
                  {countup(4360, play)}
                </Typography>
              </div>
              <Typography variant="h6" className={text.subtitle2}>
              Working Hour
              </Typography>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <i className="ion-ios-heart-outline" />
                <Typography variant="h4" className={text.title2}>
                  {countup(5, play)}
                </Typography>
              </div>
              <Typography variant="h6" className={text.subtitle2}>
                Happy Clients
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


export default withTheme(Counter);
