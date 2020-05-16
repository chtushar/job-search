let fetch = require("node-fetch");
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

let baseUrl = "https://jobs.github.com/positions.json?description=javascript";

async function fetchGithub() {
  let resultCount = 1,
    onPage = 0;
  let allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}&page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log(jobs.length);
    onPage++;
  }

  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();

    let isJunior = true;

    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("architect")
    ) {
      isJunior = false;
    }

    return isJunior;
  });

  console.log(jrJobs.length);

  const success = await setAsync("github", JSON.stringify(jrJobs))
    .then((result) => result)
    .catch((err) => err);
  console.log({ success });
}

module.exports = fetchGithub;
