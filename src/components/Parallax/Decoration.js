import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';
import { withTheme } from '@material-ui/core/styles';
import DotDeco from "../../public/images/decoration/dot-deco.svg";
import TriangleDeco from "../../public/images/decoration/triangle-deco.svg";

function ParallaxDeco() {
  const classes = useStyles();

  return (
    <div className={classes.parallaxWrap} >
      <ParallaxProvider>
        <div className={classes.bannerParallaxWrap}>
          <Parallax
            y={[-40, 40]}
            tagOuter="figure"
          >
            <svg
              fill="#cccccc"
              width={845}
              height={1099}
              className={
                clsx(
                  classes.parallaxVertical,
                  classes.parallaxDot
                )
              }
            >
              <use xlinkHref={`${DotDeco}#dot`} />
            </svg>
          </Parallax>
          <Parallax
            y={[-50, 50]}
            tagOuter="figure"
          >
            <svg
              fill="#cccccc"
              width={902}
              height={1042}
              className={
                clsx(
                  classes.parallaxVertical,
                  classes.parallaxTriangle
                )
              }
            >
              <use xlinkHref={`${TriangleDeco}#triangle`}  />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default withTheme(ParallaxDeco)