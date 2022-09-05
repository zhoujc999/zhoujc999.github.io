import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(0.25, 2),
    textAlign: "center",
    marginTop: "auto",
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200],
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
      {"Powered by "}
      <Link href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
        {"GatsbyJS"}
      </Link>
      {" & "}
      <Link href="https://www.mui.com/" target="_blank" rel="noreferrer">
        {"Material-UI"}
      </Link>
      {"."}
    </Typography>
  );
}
