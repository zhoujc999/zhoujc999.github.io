import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Profile from '../components/Profile';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Interests from '../components/Interests';
import Footer from '../components/Footer';
import ButtonAppBar from '../components/Appbar';

const useStyles = makeStyles(theme => ({
  leftFrame: {
    margin: theme.spacing(2, 0, 4)
    },
  rightFrame: {
    borderTopStyle: "solid",
    borderTopColor: "#e6e6e6",
    borderTopWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: "#e6e6e6",
    borderLeftWidth: "1px",
    backgroundColor: "#f0f5f9",
    padding: theme.spacing(5, 8, 2),
  },
  aboutFrame: {
  },
  experienceFrame: {
    margin: theme.spacing(0, 0, 2, 0)
  },
  projectsFrame: {
    margin: theme.spacing(0, 0, 4, 0)
  },
  interestsFrame: {
    margin: theme.spacing(0, 0, 4, 0)
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Hidden smUp>
        <ButtonAppBar />
      </Hidden>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} md={4} lg={3} className={classes.leftFrame}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={9} className={classes.rightFrame}>
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
    </React.Fragment>
  );
}
