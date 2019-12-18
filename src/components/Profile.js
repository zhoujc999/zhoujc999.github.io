import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FileDocument from 'mdi-material-ui/FileDocument'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Education from '../components/Education'
import Bio from '../components/Bio'
// import logo from 'https://via.placeholder.com/150/09f/fff.png';


const useStyles = makeStyles(theme => ({
  avatarFrame: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(4),
  },
  nameFrame: {
    display: 'flex',
    justifyContent: 'center',
  },
  bioFrame: {
    display: 'flex',
    justifyContent: 'center',
  },
  educationFrame: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const bioDetails = {
  name: "Jingchao Zhou",
  githubText: "@zhoujc999",
  githubLink: "https://github.com/zhoujc999",
  emailText: "jingchao.zhou@duke.edu",
  emailLink: "mailto:jingchao.zhou@duke.edu",
  location: "United States",
  resumeLink: "https://github.com/zhoujc999",
  linkedinText: "jason-jingchao-zhou",
  linkedinLink: "https://www.linkedin.com/in/jason-jingchao-zhou/",
}

export default function Profile() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.avatarFrame}>
        <Avatar alt="Jingchao Zhou" src="https://via.placeholder.com/150/09f/fff.png" className={classes.avatar} />
      </div>
      <div className={classes.nameFrame}>
        <Typography variant="h4" fontWeight="fontWeightBold" color="primary">
          {bioDetails.name}
        </Typography>
      </div>
      <div className={classes.bioFrame}>
        <Bio />
      </div>
      <div className={classes.educationFrame}>
        <Education />
      </div>
    </React.Fragment>
  );
}
