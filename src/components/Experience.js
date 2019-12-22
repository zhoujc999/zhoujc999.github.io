import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../content/Experience';

const useStyles = makeStyles(theme => ({
  titleFrame: {
  },
  bodyFrame: {
  },
}));


export default function Experience(props) {
  const classes = useStyles();
  const experiencesList = experiences;

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={1}>
      <Grid item className={classes.titleFrame}>
        <Typography variant="h5" fontWeight="fontWeightBold" color="textPrimary" gutterBottom>
          {'My Experience'}
        </Typography>
      </Grid>
      <Grid item className={classes.bodyFrame}>
        <Grid container spacing={3}>
          {experiencesList.map((value, index) => {
            return (
              <Grid item xs={12} lg={6} key={index}>
                <ExperienceCard details={value} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
