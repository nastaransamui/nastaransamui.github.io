import React, { useState, useEffect } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
import appTheme from './components/theme/appTheme';
import './public/App.css';
import 'animate.css'
import './public/animate-extends.css'
import './public/animate-slider.css'
import './public/slick/slick.css';
import './public/slick/slick-theme.css'

import Entrance from "./Entrance";

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function App(props) {
  const [loading, setLoading] = useState(0);
  const [theme, setTheme] = useState({
    ...appTheme('violet', themeType)
  });
  useEffect(() =>{

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      preloader.remove();
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  },[])
  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme({
      ...appTheme('violet', newPaletteType),
      direction: theme.direction,
    });
  };
  const muiTheme = createMuiTheme(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  return (
    <div >
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <LoadingBar
            height={3}
            color={theme.palette.primary.light}
            progress={loading}
            className="top-loading-bar"
          />
          <div id="main-wrap">
            <Entrance onToggleDark={toggleDarkTheme}/>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
