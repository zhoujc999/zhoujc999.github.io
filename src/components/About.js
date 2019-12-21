import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { aboutText as about } from '../content/About';

const useStyles = makeStyles(theme => ({
  titleFrame: {
  },
  bodyFrame: {
  },
}));


export default function About(props) {
  const classes = useStyles();
  const aboutText = about;

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={0}>
      <Grid item className={classes.titleFrame}>
        <Typography variant="h5" fontWeight="fontWeightBold" color="primary" gutterBottom>
          {'About Me'}
        </Typography>
      </Grid>
      <Grid item className={classes.bodyFrame}>
        <Typography variant="body1" paragraph>
          {aboutText}
        </Typography>
      </Grid>
    </Grid>
  );
}
