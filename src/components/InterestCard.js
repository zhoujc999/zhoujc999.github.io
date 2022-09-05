import React from "react";
import {
  useTheme,
  responsiveFontSizes,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  card: {},
  headerFrame: {
    margin: theme.spacing(1),
  },
  image: {
    height: theme.spacing(8),
    width: theme.spacing(8),
  },
  bodyFrame: {
    margin: theme.spacing(1),
  },
  headerText: {
    margin: theme.spacing(0, 0.5),
    display: "inline-block",
  },
}));

export default function InterestCard(props) {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  const classes = useStyles();
  const detailsDict = props.details;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item className={classes.headerFrame}>
                <img
                  src={detailsDict.imageUrl}
                  alt={detailsDict.name}
                  className={classes.image}
                />
              </Grid>
              <Grid item className={classes.bodyFrame}>
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.headerText}
                  component="span"
                >
                  <Box fontWeight="fontWeightRegular">{detailsDict.name}</Box>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
