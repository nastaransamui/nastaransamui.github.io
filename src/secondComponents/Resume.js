import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.primary.main,
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: `${theme.palette.secondary.main} ${theme.palette.secondary.main} transparent transparent`,
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: theme.palette.secondary.main,
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: `transparent transparent ${theme.palette.secondary.main} ${theme.palette.secondary.main}`,
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    color: '#fff',
    background: theme.palette.secondary.main,
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: '#000',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#fff',
    padding: 0,
    textTransform: 'uppercase',
  },
  body1: {
    color: '#000',
  },
  subtitle1: {
    color: theme.palette.secondary.light,
    textJustify: 'inter-word',
    textAlign: 'justify',
    '& p': {
      // textIndent: '2em',
      textWrap: 'wrap',
      margin: 2,
    },
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component='header' className={classes.mainContainer}>
      <Typography variant='h4' align='center' className={classes.heading}>
        Working Experience
      </Typography>
      <Box component='div' className={classes.timeLine}>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          2020
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}>
            React Frontend Web Developer
          </Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            Fly Bird Tech
          </Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>
            <p>
              • Developed responsive and high-performance web applications using
              React, TypeScript, and Redux, resulting in a 25% increase in user
              engagement.{' '}
            </p>
            <p>
              • Built reusable components and front-end libraries for future
              use, reducing development time by 30%.{' '}
            </p>
            <p>
              • Focused on implementing user interface and application
              performance enhancements by leveraging Webpack, improving page
              load times by 40%.{' '}
            </p>
            <p>
              • Conducted performance testing using Mocha and other performance
              testing software, leading to a 50% reduction in application
              errors.{' '}
            </p>
            <p>
              • Designed and built a responsive user interface, adhering to
              front-end coding best practices, which increased mobile traffic by
              20%.
            </p>
            <p>
              • Collaborated with back-end developers to integrate RESTful APIs
              and ensure seamless data flow, reducing data retrieval times by
              35%.
            </p>
            <p>
              • Utilized modern CSS frameworks such as Material-UI and Styled
              Components for styling and layout, enhancing the user experience
              by 15%.
            </p>
            <p>
              • Created single-page applications (SPAs) and interactive UIs
              using React and TypeScript, which boosted user satisfaction
              ratings by 10%.
            </p>
            <p>
              • Worked in an Agile environment, participating in daily
              stand-ups, sprint planning, and retrospectives, improving project
              delivery times by 25%.{' '}
            </p>
            <p>
              • Ensured cross-browser compatibility and implemented responsive
              design principles, increasing accessibility compliance by 20%.{' '}
            </p>
            <p>
              • Conducted performance testing and debugged complex technical
              issues to maintain application stability, reducing downtime by
              50%.{' '}
            </p>
            <p>
              • Provided mentorship to junior developers, fostering a
              collaborative team environment and improving team productivity by
              20%.
            </p>
          </Typography>
        </Box>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          2018 2020
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}>
            Implementation & Technical Account Manager
          </Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            InSource Asia
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            className={classes.subtitle1}>
            <p>
              • Responsible for managing all the technical aspects of a
              company’s relationship with clients.
            </p>
            • Hold regular review meetings with customers for discussions on any
            problems and issues and report to other members of the account team.
            • Analyze customers’ support needs and identify areas where the
            company can reduce support costs and offer improved service.
            <p> </p>
            <p> • Implement a new website.</p>
            <p>
              {' '}
              • Involves working closely with the product and sales management
              team in order to win new business and increase sales 10% per year.
            </p>
            <p>
              • Providing top-quality technical service, and assisting in
              strengthening customer relationships and ensuring customer
              satisfaction.{' '}
            </p>
            <p>
              • Play an integral role in getting new clients and winning sales.
              Analyze prospects’ technical and business requirements, as well as
              developing solutions that meet those needs.
            </p>
            <p>
              • Work with the product development teams in order to customize
              products for large sales or for individual customers.
            </p>
            <p>
              • Demonstrate products to customers and explain how such products
              meet customers’ needs.
            </p>
            <p>
              {' '}
              • Whenever customers agree to purchase a product, identify and
              provide the support and services such customers will need so as to
              make productive and effective use of the products.{' '}
            </p>
            <p>
              • Employ project management skills to put together installation
              programs that would minimize disruption for customers. They also
              arrange training for customers for the effective use of products.
            </p>
            <p>
              • Monitor the progress of product installations so as to ensure
              that the product delivered successfully.{' '}
            </p>
            <p>
              • Responsible for managing ongoing support to customers in order
              to confirm that the customers continue to make effective use of
              the company’s products.
            </p>
            <p>
              • Monitor support requests made by customers to identify any
              recurring issues and recommend changes to products.
            </p>
            <p>
              • Responsible for overseeing the demand management across own
              projects, by understanding and anticipating project and resource
              volumes and dependencies as well as actively resolving and
              escalating issues and conflicts as appropriate.
            </p>
          </Typography>
        </Box>
        <Typography
          variant='h2'
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          2015 - Present
        </Typography>
        <Box component='div' className={classes.timeLineItem}>
          <Typography
            variant='h5'
            align='center'
            className={classes.subHeading}>
            Freelance Fullstack Javascript developer
          </Typography>
          <Typography variant='body1' align='center' className={classes.body1}>
            at Own
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
