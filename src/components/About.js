import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { aboutText } from "../content/About";

const useStyles = makeStyles((theme) => ({
  titleFrame: {},
  bodyFrame: {},
}));

export default function About(props) {
  const classes = useStyles();
  const about = aboutText;

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item className={classes.titleFrame}>
        <Typography
          variant="h5"
          fontWeight="fontWeightBold"
          color="textPrimary"
          gutterBottom
        >
          {"About Me"}
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
