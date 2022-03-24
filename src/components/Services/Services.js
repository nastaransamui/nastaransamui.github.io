import React, { useRef } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useText } from '../theme/common';
import Title from '../Title/Title';
import IconTextCard from '../Cards/IconText';
import useStyle from './services-style';
import '../../public/slick/slick.css';
import '../../public/slick/slick-theme.css';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
const services = [
  {
    name: 'React',
    desc: 'Mobile developement with React Native .',
    Icon: 'SiReact',
  },
  {
    name: 'Node JS Backend',
    desc: 'Back end pure Node JS and Next.js frame work.',
    Icon: 'SiNodeDotJs',
  },
  {
    name: 'Mongo DB',
    desc: 'Mongo DB desing and query writing.',
    Icon: 'SiMongodb',
  },
  {
    name: 'Material UI ',
    desc: 'Front End UI desing with Frameworks.',
    Icon: 'SiMaterialUi',
  },
  {
    name: 'Javascript Prototyping',
    desc: 'Javascript and CSS for front End.',
    Icon: 'SiJavascript',
  },
  {
    name: 'Github ',
    desc: 'Github Version control.',
    Icon: 'SiGithub',
  },
];

function Services(props) {
  const classes = useStyle();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
          <strong>Services</strong>
        </Title>
        <Typography className={text.paragraph}>
          Working with mutual respect and trust
        </Typography>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={clsx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}>
            <IosArrowBack />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {services.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <IconTextCard
                  text={item.name}
                  desc={item.desc}
                  Icon={item.Icon}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={clsx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}>
            <IosArrowForward />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default withTheme(Services);
