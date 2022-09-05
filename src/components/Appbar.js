import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  leftFrame: {
    margin: theme.spacing(0, 3),
  },
  leftButton: {},
  titleFrame: {
    margin: theme.spacing(0, 3),
  },
  title: {},
  rightFrame: {
    margin: theme.spacing(0, 3),
  },
  rightButton: {},
  fillerButton: {
    padding: theme.spacing(3),
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const sectionHeaders = [
    "Profile",
    "About",
    "Experience",
    "Research",
    "Projects",
    "Interests",
  ];
  const handleLeftClick = props.leftClickHandler;
  const handleRightClick = props.rightClickHandler;
  var page = props.pageIndex;

  return (
    <AppBar position="fixed">
      <Grid
        container
        direction="row"
        wrap="nowrap"
        alignItems="center"
        justify="space-between"
      >
        <Grid item className={classes.leftFrame}>
          {page !== 0 ? (
            <IconButton
              className={classes.leftButton}
              color="inherit"
              aria-label="left"
              onClick={handleLeftClick}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
          ) : (
            <div className={classes.fillerButton} />
          )}
        </Grid>
        <Grid item className={classes.titleFrame}>
          <Typography variant="h6" className={classes.title} noWrap>
            {sectionHeaders[page]}
          </Typography>
        </Grid>
        <Grid item className={classes.rightFrame}>
          {page !== 4 ? (
            <IconButton
              className={classes.rightButton}
              color="inherit"
              aria-label="right"
              onClick={handleRightClick}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          ) : (
            <div className={classes.fillerButton} />
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
}
