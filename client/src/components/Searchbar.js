import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  form: {
    marginBottom: theme.spacing(8),
  },
  field: {
    width: "100%",
  },
}));

const bookSearch = () => {
  API.search().then((res) =>
    this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results,
    })
  );
};

const Searchbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Book Search
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              className={classes.field}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onSubmit={(event) => bookSearch(event)}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Searchbar;
