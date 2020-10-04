import { makeStyles } from '@material-ui/core/styles';

const settingsStyles = makeStyles(theme => ({
  active: {},
  icon: {
    '& svg': {
      fill: theme.palette.text.secondary
    }
  },
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease',
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
}));

export default settingsStyles;
