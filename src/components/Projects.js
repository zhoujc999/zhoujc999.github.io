import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../content/Projects';

const useStyles = makeStyles(theme => ({
  titleFrame: {
  },
  bodyFrame: {
  },
}));

export default function Projects(props) {
  const classes = useStyles();
  const projectsList = projects;

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={1}>
      <Grid item className={classes.titleFrame}>
        <Typography variant="h5" fontWeight="fontWeightBold" color="primary" gutterBottom>
          {'My Projects'}
        </Typography>
      </Grid>
      <Grid item className={classes.bodyFrame}>
        <Grid container spacing={3}>
          {projectsList.map((value, index) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ProjectCard details={value} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
