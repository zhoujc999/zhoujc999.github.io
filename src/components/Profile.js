import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Education from '../components/Education'
import Bio from '../components/Bio'

import {bio, educations} from '../content/Profile';



const useStyles = makeStyles(theme => ({
  avatarFrame: {
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(4),
  },
  nameFrame: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  bioFrame: {
    margin: theme.spacing(1, 0, 1)
  },
  educationFrame: {
    margin: theme.spacing(1, 0, 1)
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const bioDict = bio;
  const educationList = educations;

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.avatarFrame}>
        <Avatar alt={bioDict.name} src={bioDict.avatarUrl} className={classes.avatar} />
      </Grid>
      <Grid item className={classes.nameFrame}>
        <Typography variant="h4" fontWeight="fontWeightBold" color="primary">
          {bioDict.name}
        </Typography>
      </Grid>
      <Grid item className={classes.bioFrame}>
        <Bio details={bioDict}/>
      </Grid>
      {educationList.map((value, index) => {
        return (
          <Grid item className={classes.educationFrame} key={index}>
            <Education details={value} key={index} />
          </Grid>
        );
      })}
    </Grid>
  );
}
