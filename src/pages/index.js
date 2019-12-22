import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import theme from '../theme';
import Profile from '../components/Profile';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Interests from '../components/Interests';
import Footer from '../components/Footer';
import ButtonAppBar from '../components/Appbar';

const useStyles = makeStyles(theme => ({
  leftFrame: {
    margin: theme.spacing(2, 0, 6)
    },
  filler: {
    height: theme.spacing(6),
  },
  rightFrame: {
    borderTopStyle: "solid",
    borderTopColor: "#e6e6e6",
    borderTopWidth: "1px",
    [theme.breakpoints.up('md')]: {
      borderTopStyle: "none",
      borderTopColor: "#ffffff",
      borderTopWidth: "0px",
      borderLeftStyle: "solid",
      borderLeftColor: "#e6e6e6",
      borderLeftWidth: "1px",
    },
    backgroundColor: "#f0f5f9",
    padding: theme.spacing(5, 8, 2),
  },
  aboutFrame: {
    margin: theme.spacing(0, 0, 2)
  },
  experienceFrame: {
    margin: theme.spacing(2, 0, 4)
  },
  projectsFrame: {
    margin: theme.spacing(2, 0, 4)
  },
  interestsFrame: {
    margin: theme.spacing(2, 0, 6)
  },
}));

export default function Index(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jason Zhou</title>
        <link rel="canonical" href="https://zhoujc999.github.io" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hidden mdUp>
          <ButtonAppBar />
          <div className={classes.filler} />
        </Hidden>
        <Grid container spacing={0}>
          <Grid item xs={12} md={5} lg={4} xl={3} className={classes.leftFrame}>
            <Profile />
          </Grid>
          <Grid item xs={12} md={7} lg={8} xl={9} className={classes.rightFrame}>
            <Grid container direction="column" alignItems="flex-start">
              <Grid item className={classes.aboutFrame} id="about">
                <About />
              </Grid>
              <Grid item className={classes.experienceFrame} id="experience">
                <Experience />
              </Grid>
              <Grid item className={classes.projectsFrame} id="projects">
                <Projects />
              </Grid>
              <Grid item className={classes.interestsFrame} id="interests">
                <Interests />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
