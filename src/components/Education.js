import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  nameFrame: {
    margin: theme.spacing(0, 0, 0, 0.5),
  },
  detailsFrame: {
    margin: theme.spacing(0.5, 0, 0, 0),
  },
  schoolName: {
  },
  schoolDetails: {
  },
  bullet: {
    display: 'inline-block',
    margin: theme.spacing(0, 1, 0),
  },
}));

export default function Education(props) {
  const classes = useStyles();
  const detailsDict = props.details;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item className={classes.nameFrame}>
        <Typography variant="h6" color="textPrimary" align="left" className={classes.schoolName}>
          {detailsDict.school}
        </Typography>
      </Grid>
      <Grid item className={classes.detailsFrame}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item>
            <Typography variant="body2" color="textPrimary" align="left" className={classes.experienceDetails}>
              {bull}
              {detailsDict.class}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textPrimary" align="left" className={classes.experienceDetails}>
              {bull}
              {detailsDict.major}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textPrimary" align="left" className={classes.experienceDetails}>
              {bull}
              {detailsDict.minor}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textPrimary" align="left" className={classes.experienceDetails}>
              {bull}
              {detailsDict.location}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
