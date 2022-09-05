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
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LightbulbOn from "mdi-material-ui/LightbulbOn";

const useStyles = makeStyles((theme) => ({
  headerFrame: {
    margin: theme.spacing(1),
  },
  bodyFrame: {
    margin: theme.spacing(1),
  },
  cardContent: {
    justifyContent: "center",
    margin: theme.spacing(0, 0, -2),
  },
  cardActions: {
    margin: theme.spacing(-2, 0, 0),
    justifyContent: "center",
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
}));

export default function ProjectCard(props) {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  const classes = useStyles();
  const detailsDict = props.details;
  const headerDict = detailsDict.projectHeader;
  const body = detailsDict.projectBody;
  const projectUrl = detailsDict.projectUrl;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Grid container direction="column" alignItems="flex-start">
              <Grid item className={classes.headerFrame}>
                <CardHeader details={headerDict} />
              </Grid>
              <Grid item className={classes.bodyFrame}>
                <CardBody details={body} />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              size="small"
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

function CardHeader(props) {
  const classes = useStyles();
  const detailsDict = props.details;

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      wrap="nowrap"
      spacing={1}
    >
      <Grid item className={classes.iconFrame}>
        <LightbulbOn fontSize="large" />
      </Grid>
      <Grid item className={classes.textFrame}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item>
            <Typography
              variant="body2"
              className={classes.headerText}
              component="span"
            >
              <Box fontWeight="fontWeightMedium">{detailsDict.name}</Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              className={classes.headerText}
              color="textSecondary"
            >
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
    <Typography
      variant="body2"
      color="textPrimary"
      align="left"
      className={classes.projectDetails}
    >
      {bodyText}
    </Typography>
  );
}
