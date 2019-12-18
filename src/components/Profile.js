import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

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
      <Container className={classes.avatarFrame}>
        <Avatar alt="Jingchao Zhou" src="https://via.placeholder.com/150/09f/fff.png" className={classes.avatar} />
      </Container>
      <Container className={classes.nameFrame}>
        <Typography variant="h4" fontWeight="fontWeightBold" color="primary">
          {bioDetails.name}
        </Typography>
      </Container>
      <Container className={classes.bioFrame}>
        <Bio />
      </Container>
      <Container className={classes.educationFrame}>
        <Education />
      </Container>
    </React.Fragment>
  );
}
