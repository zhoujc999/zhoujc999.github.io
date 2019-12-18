
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 6),
  },
  schoolName: {
    margin: theme.spacing(1, 1),
  },
  schoolDetails: {
    margin: theme.spacing(0, 0),
  },
}));

const educationDetails = {
  school: "Duke University",
  class: "Class of 2021",
  major1: "B.S. Computer Science and Economics",
  major2: "B.S. Economics",
  minor: "Mathematics Minor",
  location: "Durham, NC",
}

export default function Education() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Typography variant="h6" color="primary" align="center" className={classes.schoolName}>
          {educationDetails.school}
        </Typography>
        <Grid container direction="row" alignItems="center" wrap="nowrap">
          <Grid item>
            <ArrowRightIcon fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="body1" color="primary" align="left" className={classes.schoolDetails}>
              {educationDetails.class}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" wrap="nowrap">
          <Grid item>
            <ArrowRightIcon fontSize="small" />
          </Grid>
          <Grid item wrap="wrap">
            <Typography variant="body1" color="primary" align="left" className={classes.schoolDetails}>
              {educationDetails.major1}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" wrap="nowrap">
          <Grid item>
            <ArrowRightIcon fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="primary" align="left" className={classes.schoolDetails}>
              {educationDetails.minor}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" wrap="nowrap">
          <Grid item>
            <ArrowRightIcon fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="primary" align="left" className={classes.schoolDetails}>
              {educationDetails.location}
            </Typography>
          </Grid>
        </Grid>
      </div>
  );
}
