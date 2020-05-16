import React from "react";
import { Typography } from "@material-ui/core";
import Job from "./Job";

const Jobs = ({ jobs }) => {
  return (
    <div className="jobs">
      <Typography variant="h1">Entry level Software Jobs</Typography>
      {jobs.map((job) => (
        <Job key={job.title} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
