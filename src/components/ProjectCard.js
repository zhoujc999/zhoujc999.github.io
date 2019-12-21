import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LightbulbOn from 'mdi-material-ui/LightbulbOn'

const useStyles = makeStyles(theme => ({
  headerFrame: {
    margin: theme.spacing(1),
  },
  bodyFrame: {
    margin: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(8),
    height: "100%",
  },
  headerColumn: {
    margin: theme.spacing(0, 2),
  },
  headerDetail: {
    margin: theme.spacing(-0.25, 0),
  },
  headerText: {
    margin: theme.spacing(0, 0.5),
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const detailsDict = props.details;
  const headerDict = detailsDict.projectHeader;
  const bodyDict = detailsDict.projectBody;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item className={classes.headerFrame}>
            <CardHeader details={headerDict} />
          </Grid>
          <Grid item className={classes.bodyFrame}>
            <CardBody details={bodyDict} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function CardHeader(props) {
  const classes = useStyles();
  const detailsDict = props.details;

  return (
    <Grid container direction="row" alignItems="center" wrap="nowrap">
      <Grid item className={classes.iconFrame}>
        <LightbulbOn fontSize="large" />
      </Grid>
      <Grid item className={classes.textFrame}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item>
            <Typography variant="body2" className={classes.headerText} component="div">
              <Box fontWeight="fontWeightBold">
                {detailsDict.name}
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.headerText}>
              {detailsDict.duration}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function CardBody(props) {
  const classes = useStyles();
  const bodyText = props.details;

  return (
    <Typography variant="body2" color="primary" align="left" className={classes.schoolDetails}>
      {bodyText}
    </Typography>
  );
}
