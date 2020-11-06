import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  image: {
    width: "100%",
    height: "auto",
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Results = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={3} md={2}>
              <img
                className={classes.image}
                src="https://www.fillmurray.com/200/300"
                alt="cover"
              />
            </Grid>
            <Grid item xs={9} md={10}>
              <Grid container spacing={3} className={classes.titleRow}>
                <Grid item>
                  <Typography variant="h5" gutterBottom>
                    Book Title
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Author
                  </Typography>
                </Grid>
                <Grid item>
                  <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                  >
                    <Button>View</Button>
                    <Button>Save</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pharetra velit ut blandit vulputate. Pellentesque faucibus urna
                dolor, suscipit semper nibh ullamcorper id. Suspendisse turpis
                quam, luctus ut diam sit amet, malesuada porta sapien. Ut quis
                tempor nibh. Morbi fermentum nisl ipsum, id vulputate sapien
                commodo ut. Phasellus non libero tellus. Integer vel nibh at
                lacus ullamcorper efficitur quis ac turpis.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Results;
