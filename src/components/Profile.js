import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Education from '../components/Education'
import Bio from '../components/Bio'

import {bio, educations} from '../content/Profile';

import display_avatar from '../assets/display_avatar.jpg';

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
  nameText: {
    display: 'inline-block',
  },
  bioFrame: {
    margin: theme.spacing(1, 0, 2)
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
        <Avatar alt={bioDict.name} src={display_avatar} className={classes.avatar} />
      </Grid>
      <Grid item className={classes.nameFrame}>
        <Typography variant="h4" color="textPrimary" className={classes.nameText} component="span">
          <Box fontWeight="fontWeightMedium">
            {bioDict.name}
          </Box>
        </Typography>
      </Grid>
      <Grid item className={classes.bioFrame}>
        <Bio details={bioDict}/>
      </Grid>
      <Grid item>
        {educationList.map((value, index) => {
          return (
            <Grid item className={classes.educationFrame} key={index}>
              <Education details={value} key={index} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
