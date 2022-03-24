import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useText } from '../theme/common';
import useStyles from './cards-style';
import {
  SiReact,
  SiMongodb,
  SiMaterialUi,
  SiNodeDotJs,
  SiJavascript,
  SiGithub,
} from 'react-icons/si/index';
import { IconContext } from 'react-icons';
import { useTheme } from '@material-ui/core';
export default function Testimonial(props) {
  const classes = useStyles();
  const textStyle = useText();
  const theme = useTheme();
  const { text, desc, Icon } = props;
  return (
    <Paper className={classes.iconText}>
      <div className={classes.icon}>
        <IconContext.Provider
          value={{
            color: `${theme.palette.primary.main}`,
            className: 'global-class-name',
          }}>
          <div>
            {Icon === 'SiMaterialUi' ? (
              <SiMaterialUi size='8em' />
            ) : Icon === 'SiReact' ? (
              <SiReact size='8em' />
            ) : Icon === 'SiMongodb' ? (
              <SiMongodb size='8em' />
            ) : Icon === 'SiNodeDotJs' ? (
              <SiNodeDotJs size='8em' />
            ) : Icon === 'SiJavascript' ? (
              <SiJavascript size='8em' />
            ) : Icon === 'SiGithub' ? (
              <SiGithub size='8em' />
            ) : null}
          </div>
        </IconContext.Provider>
      </div>
      <div className={classes.more}>
        <Typography
          className={clsx(classes.name, textStyle.paragraph)}
          variant='h6'
          display='block'>
          {text}
        </Typography>
        <Typography
          className={clsx(classes.desc, textStyle.paragraph)}
          display='block'>
          {desc}
        </Typography>
      </div>
    </Paper>
  );
}

Testimonial.propTypes = {
  Icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
