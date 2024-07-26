import React, { useState, useEffect } from 'react';
import {
  ThemeProvider,
  createTheme,
  StylesProvider,
  jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
import appTheme from './components/theme/appTheme';
import './public/App.css';
import 'animate.css';
import './public/animate-extends.css';
import './public/animate-slider.css';
import './public/slick/slick.css';
import './public/slick/slick-theme.css';

import { Route, Switch } from 'react-router-dom';
// import Entrance from './Entrance';
import Portfolio from './secondComponents/Portfolio';
import Resume from './secondComponents/Resume';
import SecondEntrance from './SecondEntrance';
import Navbar from './secondComponents/Navbar';
import Contact from './secondComponents/Contact';
import Specialities from './secondComponents/Specialities';
let themeType = 'dark';
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'dark';
}

function App(props) {
  const [loading, setLoading] = useState(0);
  const [theme] = useState({
    ...appTheme('geenNature', themeType),
  });
  useEffect(() => {
    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      preloader.remove();
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  return (
    <div>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <LoadingBar
            height={3}
            color={theme.palette.primary.light}
            progress={loading}
            className='top-loading-bar'
          />
          <div id='main-wrap'>
            {/* <Entrance onToggleDark={toggleDarkTheme} /> */}
            {/* <SecondEntrance /> */}

            <Navbar />
            <Switch>
              <Route exact path='/' component={SecondEntrance} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/specialities' component={Specialities} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
