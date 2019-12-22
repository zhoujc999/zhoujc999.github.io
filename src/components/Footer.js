import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(0.25, 2),
    textAlign: 'center',
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
  <footer className={classes.footer}>
    <Copyright />
  </footer>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Powered by '}
      <Link  href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">
        {'GatsbyJS'}
      </Link>
      {' & '}
      <Link href="https://material-ui.com/" target="_blank" rel="noreferrer">
        {'Material-UI'}
      </Link>
      {'.'}
    </Typography>
  );
}

