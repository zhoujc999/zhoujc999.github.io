import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InterestCard from "../components/InterestCard";
import { interests } from "../content/Interests";

const useStyles = makeStyles((theme) => ({
  titleFrame: {},
  bodyFrame: {},
}));

export default function Interests(props) {
  const classes = useStyles();
  const interestsList = interests;

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={1}>
      <Grid item className={classes.titleFrame}>
        <Typography
          variant="h5"
          fontWeight="fontWeightBold"
          color="textPrimary"
          gutterBottom
        >
          {"Some of My Interests"}
        </Typography>
      </Grid>
      <Grid item className={classes.bodyFrame}>
        <Grid container spacing={3}>
          {interestsList.map((value, index) => {
            return (
              <Grid item xs={12} sm={6} md={12} lg={6} xl={4} key={index}>
                <InterestCard details={value} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
