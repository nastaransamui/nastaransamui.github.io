import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import javascript from '../public/images/Specialities/javascript.png';
import typescript from '../public/images/Specialities/typescript.png';
import redux from '../public/images/Specialities/redux.png';
import react from '../public/images/Specialities/react.png';
import html from '../public/images/Specialities/HTML5.png';
import css from '../public/images/Specialities/css.jpeg';
import flutter from '../public/images/Specialities/flutter.png';
import ui from '../public/images/Specialities/ui.png';
import node from '../public/images/Specialities/node.png';
import express from '../public/images/Specialities/express.jpeg';
import next from '../public/images/Specialities/next.png';
import meteor from '../public/images/Specialities/meteor.png';
import mongo from '../public/images/Specialities/mongo.png';
import git from '../public/images/Specialities/git.png';
import wp from '../public/images/Specialities/wp.png';
import hc from '../public/images/Specialities/hc.webp';

import ImageThumbCard from '../components/Cards/ImageThumb';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.primary.main,
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '1rem',
    textAlign: 'center',
    boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`,
  },
}));

const Specialities = () => {
  const classes = useStyles();
  const projects = useMemo(() => {
    return [
      {
        name: 'Javascript',
        description: ``,
        image: javascript,
      },
      {
        name: 'Typescript',
        description: ``,
        image: typescript,
      },
      {
        name: 'React',
        description: ``,
        image: react,
      },
      {
        name: 'Redux',
        description: ``,
        image: redux,
      },
      {
        name: 'Flutter',
        description: ``,
        image: flutter,
      },
      {
        name: 'Material UI',
        description: ``,
        image: ui,
      },
      {
        name: 'Node JS',
        description: ``,
        image: node,
      },
      {
        name: 'Express JS',
        description: ``,
        image: express,
      },
      {
        name: 'Next JS',
        description: ``,
        image: next,
      },
      {
        name: 'Meteor JS',
        description: ``,
        image: meteor,
      },
      {
        name: 'Mongo DB',
        description: ``,
        image: mongo,
      },
      {
        name: 'Git',
        description: ``,
        image: git,
      },
      {
        name: 'Hazelcast',
        description: ``,
        image: hc,
      },
      {
        name: 'Wordpress',
        description: ``,
        image: wp,
      },
      {
        name: 'HTML',
        description: ``,
        image: html,
      },
      {
        name: 'CSS',
        description: ``,
        image: css,
      },
    ];
  }, []);
  return (
    <Box component='div' className={classes.mainContainer}>
      <Grid container justifyContent='center'>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={3} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <ImageThumbCard
                  img={project.image}
                  title={project.name}
                  link={null}
                  size='short'
                />
                {/* <CardMedia
                  component='img'
                  alt='Project 1'
                  height='140'
                  image={project.image}
                  style={{ objectFit: 'scale-down' }}
                /> */}
                {/* <CardContent>
                  <Typography variant='h5' gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {project.description}
                  </Typography>
                </CardContent> */}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Specialities;
