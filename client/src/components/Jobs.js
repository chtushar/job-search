import React, { useState } from "react";
import { Typography, MobileStepper, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Job from "./Job";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import JobModal from "./JobModal";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginBottom: "5rem",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pageNum: {
    margin: "1rem auto",
    textAlign: "center",
  },
  numberOfJob: {
    textAlign: "center",
  },
});

const Jobs = ({ jobs }) => {
  const jobLength = jobs.length;
  const numPages = Math.ceil(jobLength / 10);

  //pagination
  let [activeStep, setActiveStep] = useState(0);
  const jobsOnPage = jobs.slice(activeStep * 10, activeStep * 10 + 10);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const classes = useStyles();

  //modal
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectJob = (job) => {
    console.log(job);
    setSelectedJob(job);
    handleClickOpen();
  };
  return (
    <>
      <JobModal
        open={open}
        job={selectedJob}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
      <Typography variant="h3" component="h1" className={classes.title}>
        Entry level Software Jobs
      </Typography>
      <Typography variant="h6" className={classes.numberOfJob}>
        Found {jobLength} jobs.
      </Typography>
      <div className={classes.cardsContainer}>
        {jobsOnPage.map((job) => (
          <Job key={uuid()} job={job} onClick={() => selectJob(job)} />
        ))}
      </div>
      <div className={classes.pageNum}>
        <Typography>
          Page {activeStep + 1} of {numPages}
        </Typography>
      </div>
      <MobileStepper
        variant="progress"
        steps={Math.ceil(jobLength / 10)}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {/* {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )} */}
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {/* {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )} */}
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </>
  );
};

export default Jobs;
