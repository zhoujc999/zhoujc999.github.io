import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { aboutText } from '../content/About';

const useStyles = makeStyles(theme => ({
  titleFrame: {
  },
  bodyFrame: {
  },
}));


export default function About(props) {
  const classes = useStyles();
  const about = aboutText;

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item className={classes.titleFrame}>
        <Typography variant="h5" fontWeight="fontWeightBold" color="textPrimary" gutterBottom>
          {'About Me'}
        </Typography>
      </Grid>
      <Grid item className={classes.bodyFrame}>
        <Typography variant="body1" paragraph>
          {about}
        </Typography>
      </Grid>
    </Grid>
  );
}
