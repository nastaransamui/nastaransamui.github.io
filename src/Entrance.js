import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Header from './components/Header/Header'
import BannerNav from './components/BannerNav/BannerNav';
import About from './components/About/About';
import  Timeline from './components/Timeline/Timeline';
import Counter from './components/Counter/Counter';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Decoration from './components/Parallax/Decoration';
import Testimonials from './components/Testimonials/Testimonials';
// import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';


const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.dark : theme.palette.background.paper,
  },
  greyBg: {
    paddingTop: theme.spacing(10)
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(3)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  },
  parallaxWrap: {
    position: 'relative'
  },
  bottomDeco: {
    top: -200,
    position: 'absolute',
    width: '100%',
    height: 'calc(100% + 200px)'
  }
}));

function Entrance(props) {
  const classes = useStyles();
  const { onToggleDark } = props;
  return (
    <React.Fragment>
      <CssBaseline />
            <section id="home" />
            <div className={classes.mainWrap}>
            <Header onToggleDark={onToggleDark} />
            <section id="home">
              <BannerNav onToggleDark={onToggleDark} />
            </section>
            <section id="about">
              <About />
              <Timeline />
              <Counter />
            </section>
            <div className={classes.greyBg}>
              <div className={classes.parallaxWrap}>
                <Decoration />
                <section id="services">
                  <Services />
                </section>
                <section id="my-work" className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
                  <Gallery />
                </section>
              </div>
          <section id="sTestimonials">
            <Testimonials />
          </section>
          <div className={classes.parallaxWrap}>
            <div className={classes.bottomDeco}>
              <Decoration />
            </div>
            {/* <section id="blog" className={classes.spaceTopShort}>
              <Blog />
            </section> */}
            <section id="contact" className={classes.spaceTop}>
              <Footer />
            </section>
          </div>
            </div>
            </div>
      </React.Fragment>
  );
}


Entrance.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
};


export default withTheme(Entrance);