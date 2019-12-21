import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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
}));

export default function Education(props) {
  const classes = useStyles();
  const detailsDict = props.details;

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item className={classes.nameFrame}>
        <Typography variant="h6" color="primary" align="left" className={classes.schoolName}>
          {detailsDict.school}
        </Typography>
      </Grid>
      <Grid item className={classes.detailsFrame}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item>
            <EducationPoint detail={detailsDict.class} />
          </Grid>
          <Grid item>
            <EducationPoint detail={detailsDict.major} />
          </Grid>
          <Grid item>
            <EducationPoint detail={detailsDict.minor} />
          </Grid>
          <Grid item>
            <EducationPoint detail={detailsDict.location} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function EducationPoint(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center" wrap="nowrap">
      <Grid item>
        <ArrowRightIcon fontSize="small" />
      </Grid>
      <Grid item>
        <Typography variant="body2" color="primary" align="left" className={classes.schoolDetails}>
          {props.detail}
        </Typography>
      </Grid>
    </Grid>
  );
}
