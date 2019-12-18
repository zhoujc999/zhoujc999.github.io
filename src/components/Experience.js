import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ExperienceCard from '../components/ExperienceCard';

const useStyles = makeStyles(theme => ({
  subtitleFrame: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: theme.spacing(2, 0, 1),
  },
  bodyFrame: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
  },
}));


export default function Experience() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.subtitleFrame}>
        <Typography variant="h5" fontWeight="fontWeightBold" color="primary">
          {'My Experience'}
        </Typography>
      </Container>
      <Container className={classes.bodyFrame}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ExperienceCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExperienceCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExperienceCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExperienceCard />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
