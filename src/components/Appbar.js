import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const section = "Profile"

const useStyles = makeStyles(theme => ({
  leftFrame: {
    margin: theme.spacing(0, 3),
  },
  leftButton: {
  },
  titleFrame: {
    margin: theme.spacing(0, 3),
  },
  title: {
  },
  rightFrame: {
    margin: theme.spacing(0, 3),
  },
  rightButton: {
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const sectionText = section;

  return (
    <AppBar position="fixed">
      <Grid container direction="row" wrap="nowrap" alignItems="center" justify="space-between">
        <Grid item className={classes.leftFrame}>
          <IconButton className={classes.leftButton} color="inherit" aria-label="left">
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.titleFrame}>
          <Typography variant="h6" className={classes.title} noWrap>
            {sectionText}
          </Typography>
        </Grid>
        <Grid item className={classes.rightFrame}>
          <IconButton className={classes.rightButton} color="inherit" aria-label="right">
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}

