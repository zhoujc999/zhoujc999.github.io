import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const aboutBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel metus auctor, tempor lorem eget, eleifend elit. Pellentesque a turpis ut mauris malesuada lobortis. Pellentesque lobortis purus in metus consectetur, vel pellentesque massa faucibus. Donec tincidunt ex vitae turpis mollis, id suscipit lorem vestibulum. Vivamus congue maximus posuere. Aenean ligula metus, tincidunt et feugiat sit amet, bibendum vel purus. Donec tempus dolor sed neque placerat, eget sodales orci rhoncus."

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


export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.subtitleFrame}>
        <Typography variant="h5" fontWeight="fontWeightBold" color="primary">
          {'About Me'}
        </Typography>
      </Container>
      <Container className={classes.bodyFrame}>
        <Typography variant="body1">
          {aboutBody}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
