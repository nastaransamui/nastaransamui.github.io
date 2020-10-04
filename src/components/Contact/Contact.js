import React, { useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { useText } from '../theme/common';
import useStyles from './contact-style';
import { withTheme } from '@material-ui/core';

function Form(props) {
  const classes = useStyles();
  const text = useText();

  const [openNotif, setNotif] = useState(false);

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Paper className={classes.formBox}>
        <Grid container spacing={6}>
          <Grid item lg={5} xs={12}>
            <Typography className={clsx(classes.title, text.title)} variant="h3">
             Contact Me.
            </Typography>
          </Grid>
          <Grid item lg={7} xs={12}>
            <div className={classes.form}>
             For More discussion contact me via email or any social media
             </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withTheme(Form);
