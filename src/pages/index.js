import React, { useState } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import theme from "../theme";
import Profile from "../components/Profile";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Interests from "../components/Interests";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import ButtonAppBar from "../components/Appbar";

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <title>Jingchao Zhou</title>
    <link rel="canonical" href="https://zhoujc999.github.io" />
  </>
);

const useStyles = makeStyles(() => ({
  leftFrame: {
    margin: useTheme().spacing(2, 0, 6),
  },
  rightFrame: {
    borderTopStyle: "solid",
    borderTopColor: "#e6e6e6",
    borderTopWidth: "1px",
    [theme.breakpoints.up("md")]: {
      borderTopStyle: "none",
      borderTopColor: "#ffffff",
      borderTopWidth: "0px",
      borderLeftStyle: "solid",
      borderLeftColor: "#e6e6e6",
      borderLeftWidth: "1px",
    },
    backgroundColor: "#f0f5f9",
    padding: useTheme().spacing(5, 8, 2),
  },
  aboutFrame: {
    margin: useTheme().spacing(0, 0, 2),
  },
  experienceFrame: {
    margin: useTheme().spacing(2, 0, 4),
  },
  projectsFrame: {
    margin: useTheme().spacing(2, 0, 4),
  },
  interestsFrame: {
    margin: useTheme().spacing(2, 0, 6),
  },
  miniProfileFrame: {
    minHeight: "100vh",
    padding: useTheme().spacing(6, 0, 4),
  },
  miniAboutFrame: {
    minHeight: "100vh",
    backgroundColor: "#f0f5f9",
    padding: useTheme().spacing(10, 4, 4),
  },
  miniExperienceFrame: {
    minHeight: "100vh",
    backgroundColor: "#f0f5f9",
    padding: useTheme().spacing(10, 4, 4),
  },
  miniProjectsFrame: {
    minHeight: "100vh",
    backgroundColor: "#f0f5f9",
    padding: useTheme().spacing(10, 4, 4),
  },
  miniInterestsFrame: {
    minHeight: "100vh",
    backgroundColor: "#f0f5f9",
    padding: useTheme().spacing(10, 4, 4),
  },
}));

export default function Index(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const handleLeftClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleRightClick = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Hidden mdUp>
            <ButtonAppBar
              leftClickHandler={handleLeftClick}
              rightClickHandler={handleRightClick}
              pageIndex={page}
            />
            <Grid container direction="column" spacing={0}>
              {page === 0 ? (
                <Grid item xs={12} className={classes.miniProfileFrame}>
                  <Profile />
                </Grid>
              ) : null}
              {page === 1 ? (
                <Grid item xs={12} className={classes.miniAboutFrame}>
                  <About />
                </Grid>
              ) : null}
              {page === 2 ? (
                <Grid item xs={12} className={classes.miniExperienceFrame}>
                  <Experience />
                </Grid>
              ) : null}
              {page === 3 ? (
                <Grid item xs={12} className={classes.miniProjectsFrame}>
                  <Projects />
                </Grid>
              ) : null}
              {page === 4 ? (
                <Grid item xs={12} className={classes.miniInterestsFrame}>
                  <Interests />
                </Grid>
              ) : null}
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                md={5}
                lg={4}
                xl={3}
                className={classes.leftFrame}
              >
                <Profile />
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                lg={8}
                xl={9}
                className={classes.rightFrame}
              >
                <Grid container direction="column" alignItems="flex-start">
                  <Grid item className={classes.aboutFrame} id="about">
                    <About />
                  </Grid>
                  <Grid
                    item
                    className={classes.experienceFrame}
                    id="experience"
                  >
                    <Experience />
                  </Grid>
                  <Grid item className={classes.projectsFrame} id="projects">
                    <Projects />
                  </Grid>
                  <Grid item className={classes.interestsFrame} id="interests">
                    <Interests />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}
