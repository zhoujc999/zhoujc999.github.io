import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import RadioIcon from "@mui/icons-material/Radio";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FileDocument from "mdi-material-ui/FileDocument";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((theme) => ({
  listElement: {
    margin: theme.spacing(-1, 2),
  },
}));

function ListItemLink(props) {
  return <ListItem component="a" disableGutters dense {...props} />;
}

export default function Bio(props) {
  const classes = useStyles();
  const linkDict = props.details;

  return (
    <List>
      <ListItem disableGutters dense className={classes.listElement}>
        <ListItemIcon>
          <GitHubIcon />
        </ListItemIcon>
        <ListItemLink
          href={linkDict.githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <ListItemText primary={linkDict.githubText} />
        </ListItemLink>
      </ListItem>
      <ListItem disableGutters dense className={classes.listElement}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemLink
          href={linkDict.emailLink}
          target="_blank"
          rel="noreferrer"
        >
          <ListItemText primary={linkDict.emailText} />
        </ListItemLink>
      </ListItem>
      <ListItem disableGutters dense className={classes.listElement}>
        <ListItemIcon>
          <LocationCityIcon />
        </ListItemIcon>
        <ListItemText primary={linkDict.location} />
      </ListItem>
      <ListItem disableGutters dense className={classes.listElement}>
        <ListItemIcon>
          <FileDocument />
        </ListItemIcon>
        <ListItemLink
          href={linkDict.resumeLink}
          target="_blank"
          rel="noreferrer"
        >
          <ListItemText primary="Resume" />
        </ListItemLink>
      </ListItem>
      <ListItem disableGutters dense className={classes.listElement}>
        <ListItemIcon>
          <LinkedInIcon />
        </ListItemIcon>
        <ListItemLink
          href={linkDict.linkedinLink}
          target="_blank"
          rel="noreferrer"
        >
          <ListItemText primary={linkDict.linkedinText} />
        </ListItemLink>
      </ListItem>
      <ListItem disableGutters dense className={classes.listElement}>
        <ListItemIcon>
          <RadioIcon />
        </ListItemIcon>
        <ListItemText primary={linkDict.callsign} />
      </ListItem>
    </List>
  );
}
