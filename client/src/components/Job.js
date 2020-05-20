import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    width: "90%",
    padding: "2rem",
    margin: "1rem",
    height: "10rem",
    "&:hover": {
      cursor: "pointer",
      color: "darkgrey",
    },
  },
});

const Job = ({ job, onClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.paper} onClick={onClick}>
      <Typography gutterBottom variant="h5">
        {job.title}
      </Typography>
      <Typography color="textSecondary">{job.location}</Typography>
      <Typography color="textPrimary">
        {job.created_at.split(" ").slice(0, 3).join(" ")}
      </Typography>
    </Card>
  );
};

export default Job;
