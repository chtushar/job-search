import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    width: "40%",
    margin: "1rem auto",
    padding: "2rem",
    height: "10rem",
  },
});

const Job = ({ job }) => {
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <Typography gutterBottom variant="h5">
        {job.title}
      </Typography>
      <Typography color="textSecondary">{job.location}</Typography>
    </Card>
  );
};

export default Job;
