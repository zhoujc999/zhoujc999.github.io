import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ResearchCard from "../components/ResearchCard";
import { research } from "../content/Research";

const useStyles = makeStyles((theme) => ({
  titleFrame: {},
  bodyFrame: {},
}));

export default function Research(props) {
  const classes = useStyles();
  const researchList = research;

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={1}>
      <Grid item className={classes.titleFrame}>
        <Typography
          variant="h5"
          fontWeight="fontWeightBold"
          color="textPrimary"
          gutterBottom
        >
          {"Research"}
        </Typography>
      </Grid>
      <Grid item className={classes.bodyFrame}>
        <Grid container spacing={3}>
          {researchList.map((value, index) => {
            return (
              <Grid item xs={12} lg={6} key={index}>
                <ResearchCard details={value} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
