import React, { useEffect, useState } from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import fetch from "node-fetch";

const JOB_API_URL = "http://localhost:3001/jobs";

const mockjobs = [
  { title: "SWE 1", company: "Google" },
  { title: "SWE 2", company: "Facebook" },
  { title: "SWE 3", company: "Apple" },
];

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL).then((res) => res);
  const json = await res.json();

  console.log({ json });
}

function App() {
  const [jobList, updateJobs] = useState();

  useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={mockjobs} />
    </div>
  );
}

export default App;
