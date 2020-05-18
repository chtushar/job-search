import React, { useState } from "react";
import { Typography, MobileStepper, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Job from "./Job";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";

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
});

const Jobs = ({ jobs }) => {
  let [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" component="h1" className={classes.title}>
        Entry level Software Jobs
      </Typography>
      <div className={classes.cardsContainer}>
        {jobs.map((job) => (
          <Job key={uuid()} job={job} />
        ))}
      </div>
      <MobileStepper
        variant="progress"
        steps={6}
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
