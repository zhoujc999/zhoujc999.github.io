import React from "react";
import {
  useTheme,
  responsiveFontSizes,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const useStyles = makeStyles((theme) => ({
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
    display: "inline-block",
  },
  bullet: {
    display: "inline-block",
    margin: theme.spacing(0, 1, 0, 0),
  },
}));

export default function ExperienceCard(props) {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  const classes = useStyles();
  const detailsDict = props.details;
  const headerText = detailsDict.experienceHeader;
  const bodyText = detailsDict.experienceBody;

  return (
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  );
}

function CardHeader(props) {
  const classes = useStyles();
  const detailsDict = props.details;

  return (
    <Grid container direction="row" alignItems="center" wrap="nowrap">
      <Grid item className={classes.avatarFrame}>
        <Avatar
          alt={detailsDict.company}
          src={detailsDict.avatarUrl}
          className={classes.avatar}
          variant="rounded"
        />
      </Grid>
      <Grid item className={classes.headerColumn}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item className={classes.headerDetail}>
            <Grid container direction="row" alignItems="center" wrap="nowrap">
              <Grid item>
                <WorkIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  className={classes.headerText}
                  component="span"
                >
                  <Box fontWeight="fontWeightBold">{detailsDict.position}</Box>
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
                <Typography
                  variant="body2"
                  className={classes.headerText}
                  component="span"
                >
                  <Box fontWeight="fontWeightMedium">{detailsDict.company}</Box>
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
  );
}
