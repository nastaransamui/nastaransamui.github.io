import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Carousel from 'react-slick';
import clsx from 'clsx';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title/Title';
import useStyle from './gallery-style';
import { withTheme } from '@material-ui/core';
import Gallery1 from '../../public/Gallery/Gallery1.png';
import Gallery2 from '../../public/Gallery/Gallery2.png';
import Gallery3 from '../../public/Gallery/Gallery3.png';
import Gallery4 from '../../public/Gallery/Gallery4.png';
import Gallery5 from '../../public/Gallery/Gallery5.png';
import Gallery6 from '../../public/Gallery/Gallery6.png';
import Gallery7 from '../../public/Gallery/Gallery7.png';
import Gallery8 from '../../public/Gallery/Gallery8.png';
import Gallery9 from '../../public/Gallery/Gallery9.png';
const portfolio = [
  {
    img: Gallery1,
    title: 'Main Page desing',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'short',
    category: 'cat1'
  },
  {
    img: Gallery2,
    title: 'Travel Search Page',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'long',
    category: 'cat2'
  },
  {
    img: Gallery3,
    title: 'Login Validation ',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'short',
    category: 'cat3'
  },
  {
    img: Gallery4,
    title: 'Dashboard desing',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'long',
    category: 'cat1'
  },
  {
    img: Gallery5,
    title: 'Youtube Banner',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'short',
    category: 'cat2'
  },
  {
    img: Gallery6,
    title: 'Page Gallery',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'short',
    category: 'cat3'
  },
  {
    img: Gallery7,
    title: 'Contact Us and Google Map',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'short',
    category: 'cat1'
  },
  {
    img: Gallery8,
    title: 'Handle galleries with images and product page',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'short',
    category: 'cat2'
  },
  {
    img: Gallery9,
    title: 'Mobile Desing with Native',
    link: 'https://recminvestment.meteorapp.com/',
    size: 'long',
    category: 'cat2'
  },
];

function Gallery(props) {
  const classes = useStyle();
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(true);
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    setData(portfolio);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    arrows: true
  };

  const filterChildren = name => {
    if (name !== 'all') {
      const filteredData = portfolio.filter(item => item.category === name);
      setData(filteredData);
      setFilter(name);
    } else {
      setData(portfolio);
      setFilter('all');
    }

    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 700);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Title>
          My
          <strong>
            Work
          </strong>
        </Title>
        <div className={classes.filter}>
          <Button
            onClick={() => filterChildren('all')}
            className={filter === 'all' ? classes.selected : ''}
          >
            All
          </Button>
          <Button
            onClick={() => filterChildren('cat1')}
            className={filter === 'cat1' ? classes.selected : ''}
          >
            Category 1
          </Button>
          <Button
            onClick={() => filterChildren('cat2')}
            className={filter === 'cat2' ? classes.selected : ''}
          >
            Category 2
          </Button>
          <Button
            onClick={() => filterChildren('cat3')}
            className={filter === 'cat3' ? classes.selected : ''}
          >
            Category 3
          </Button>
        </div>
        <Hidden xsDown>
          <div className={classes.massonry}>
            {data.map((item, index) => (
              <div
                className={clsx(classes.item, isLoaded && classes.loaded)}
                key={index.toString()}
                style={{ transitionDuration: index / 4 + 's' }}
              >
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size={item.size}
                />
              </div>
            ))}
          </div>
          {data.length < 1 && <Typography variant="button" component="p" align="center">No data to display yet</Typography>}
        </Hidden>
        <Hidden smUp>
          <Carousel {...settings}>
            {data.map((item, index) => (
              <div
                className={classes.itemCarousel}
                key={index.toString()}
              >
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size={item.size}
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
      </Container>
    </div>
  );
}


export default withTheme(Gallery);
