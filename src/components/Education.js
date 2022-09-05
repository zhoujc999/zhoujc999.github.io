import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  nameFrame: {
    margin: theme.spacing(0, 0, 0, 0.5),
  },
  detailsFrame: {
    margin: theme.spacing(0.5, 0, 0, 0),
  },
  schoolName: {},
  schoolDetails: {},
  bullet: {
    display: "inline-block",
    margin: theme.spacing(0, 1, 0),
  },
}));

export default function Education(props) {
  const classes = useStyles();
  const educationDict = props.details;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item className={classes.nameFrame}>
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          className={classes.schoolName}
        >
          {educationDict.schoolName}
        </Typography>
      </Grid>
      <Grid item className={classes.detailsFrame}>
        <Grid container direction="column" alignItems="flex-start">
          {educationDict.detailsList.map((value, index) => {
            return (
              <Grid item key={index}>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  align="left"
                  className={classes.experienceDetails}
                >
                  {bull}
                  {value}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
