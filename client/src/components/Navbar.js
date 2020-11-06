import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    // flexWrap: "wrap",
    justifyContent: "space-between",
  },
  toolbarTitle: {
    //   flexGrow: 1,
    marginRight: theme.spacing(4),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Google Books
          </Typography>
          <nav>
            <Link
              href="/"
              variant="button"
              color="textPrimary"
              className={classes.link}
            >
              Search
            </Link>
            <Link
              href="/saved"
              variant="button"
              color="textPrimary"
              className={classes.link}
            >
              Saved
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
