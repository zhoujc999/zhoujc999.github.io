import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FileDocument from 'mdi-material-ui/FileDocument'
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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

function ListItemLink(props) {
  return <ListItem component="a" disableGutters dense {...props} />;
}

export default function Bio() {
  return (
    <List>
      <ListItem disableGutters dense>
        <ListItemIcon>
          <GitHubIcon />
        </ListItemIcon>
        <ListItemLink href={bioDetails.githubLink} target="_blank" rel="noreferrer">
          <ListItemText primary={bioDetails.githubText} />
        </ListItemLink>
      </ListItem>
      <ListItem disableGutters dense>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemLink href={bioDetails.emailLink} target="_blank" rel="noreferrer">
          <ListItemText primary={bioDetails.emailText} />
        </ListItemLink>
      </ListItem>
      <ListItem disableGutters dense>
        <ListItemIcon>
          <LocationCityIcon />
        </ListItemIcon>
        <ListItemText primary={bioDetails.location} />
      </ListItem>
      <ListItem disableGutters dense>
        <ListItemIcon>
          <FileDocument />
        </ListItemIcon>
        <ListItemLink href={bioDetails.resumeLink} target="_blank" rel="noreferrer">
          <ListItemText primary="Resume" />
        </ListItemLink>
      </ListItem>
      <ListItem disableGutters dense>
        <ListItemIcon>
          <LinkedInIcon />
        </ListItemIcon>
        <ListItemLink href={bioDetails.linkedinLink} target="_blank" rel="noreferrer">
          <ListItemText primary={bioDetails.linkedinText} />
        </ListItemLink>
      </ListItem>
    </List>
  );
}
