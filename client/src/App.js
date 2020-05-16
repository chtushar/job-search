import React, { useEffect, useState } from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import fetch from "node-fetch";

const JOB_API_URL = "http://localhost:3001/jobs";

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL).then((res) => res);
  const json = await res.json();
  updateCb(json);
}

function App() {
  const [jobList, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
