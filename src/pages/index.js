import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../components/ProTip';
import Profile from '../components/Profile';
import About from '../components/About';
import Link from '../components/Link';
import StickyFooter from '../components/StickyFooter';
import ButtonAppBar from '../components/Appbar';

export default function Index() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Hidden smUp>
      <ButtonAppBar />
    </Hidden>
    <Grid container spacing={0}>
      <Grid item xs={12} sm={5} md={4} lg={3}>
        <Profile />
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={9}>
        <About />
      </Grid>
    </Grid>
    <StickyFooter />
    </React.Fragment>
  );
}
