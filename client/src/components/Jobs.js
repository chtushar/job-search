import React from "react";
import { Typography } from "@material-ui/core";
import Job from "./Job";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginBottom: "5rem",
  },
});

const Jobs = ({ jobs }) => {
  const classes = useStyles();
  return (
    <div className="jobs">
      <Typography variant="h3" component="h1" className={classes.title}>
        Entry level Software Jobs
      </Typography>
      {jobs.map((job) => (
        <Job key={uuid()} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
