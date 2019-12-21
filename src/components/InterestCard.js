import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
  },
  headerFrame: {
    margin: theme.spacing(1),
  },
  bodyFrame: {
    margin: theme.spacing(1),
  },
  headerText: {
    margin: theme.spacing(0, 0.5),
  },
}));

export default function InterestCard(props) {
  const classes = useStyles();
  const detailsDict = props.details;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item className={classes.headerFrame}>
            <img src={detailsDict.imageUrl} alt={detailsDict.name} />
          </Grid>
          <Grid item className={classes.bodyFrame}>
            <Typography variant="h6" className={classes.headerText} component="h2">
              {detailsDict.name}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
