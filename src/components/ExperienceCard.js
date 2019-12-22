import React from 'react';
import { ThemeProvider, responsiveFontSizes, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
  bullet: {
    display: 'inline-block',
    margin: theme.spacing(0, 1, 0, 0),
  },
}));

export default function ExperienceCard(props) {
  const classes = useStyles();
  const detailsDict = props.details;
  const headerText = detailsDict.experienceHeader;
  const bodyText = detailsDict.experienceBody;

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item className={classes.headerFrame}>
              <CardHeader details={headerText} />
            </Grid>
            <Grid item className={classes.bodyFrame}>
              <CardBody details={bodyText} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

function CardHeader(props) {
  const classes = useStyles();
  const detailsDict = props.details;

  return (
    <Grid container direction="row" alignItems="center" wrap="nowrap">
      <Grid item className={classes.avatarFrame}>
        <Avatar alt={detailsDict.company} src={detailsDict.avatarUrl} className={classes.avatar} variant="rounded" />
      </Grid>
      <Grid item className={classes.headerColumn}>
        <Grid container direction="column" alignItems="flex-start">
        <Grid item className={classes.headerDetail}>
            <Grid container direction="row" alignItems="center" wrap="nowrap">
              <Grid item>
                <WorkIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.headerText} component="div">
                  <Box fontWeight="fontWeightBold">
                    {detailsDict.position}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.headerDetail}>
            <Grid container direction="row" alignItems="center" wrap="nowrap">
              <Grid item>
                <AlternateEmailIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.headerText}>
                  {detailsDict.company}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.headerDetail}>
            <Typography variant="body2" color="textSecondary">
              {detailsDict.duration}
              {" | "}
              {detailsDict.location}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function CardBody(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const detailsList = props.details;

  return (
    <Grid container direction="column" alignItems="flex-start" spacing={1}>
      {detailsList.map((value, index) => {
        return (
          <Grid item key={index}>
            <Typography variant="body2" color="textPrimary" align="left" className={classes.experienceDetails}>
              {bull}
              {value}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

