import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
        justifyContent="space-between"
      >
        <Grid item className={classes.leftFrame}>
          {page !== 0 ? (
            <IconButton
              className={classes.leftButton}
              color="inherit"
              aria-label="left"
              onClick={handleLeftClick}
              size="large"
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
              size="large"
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
