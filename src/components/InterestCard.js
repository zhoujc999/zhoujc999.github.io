import React from 'react';
import { useTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
  image: {
    height: theme.spacing(8),
    width: theme.spacing(8),
  },
  bodyFrame: {
    margin: theme.spacing(1),
  },
  headerText: {
    margin: theme.spacing(0, 0.5),
    display: 'inline-block',
  },
}));

export default function InterestCard(props) {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  const classes = useStyles();
  const detailsDict = props.details;

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container direction="column" alignItems="center" justify="center">
            <Grid item className={classes.headerFrame}>
              <img src={detailsDict.imageUrl} alt={detailsDict.name} className={classes.image} />
            </Grid>
            <Grid item className={classes.bodyFrame}>
              <Typography variant="h6" align="center" className={classes.headerText} component="span">
                <Box fontWeight="fontWeightRegular">
                  {detailsDict.name}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
