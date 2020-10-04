import React, { useRef} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useText } from '../theme/common';
import Title from '../Title/Title';
import BlogPostCard from '../Cards/BlogPost';
import useStyle from './blog-style';
import imgApi from '../../public/images/imgAPI';

const blogData = [
  {
    img: imgApi.photo[0],
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[1],
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[2],
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[3],
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[4],
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[5],
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
];

function Blog(props) {
  const slider = useRef(null);
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const classes = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };


  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
        latest
          &nbsp;
          <strong>
            post
          </strong>
        </Title>
        <Typography gutterBottom className={text.paragraph}>
        See all of my post
        </Typography>
        <Button className={classes.link} color="primary" href="#">luxi-theme.blog.com</Button>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={clsx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {blogData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <BlogPostCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
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
            onClick={() => slider.current.slickNext()}
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}


export default withTheme(Blog);
