const express = require("express");
const app = express();
const port = 3001;

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get("/jobs", async (req, res) => {
  const jobs = await getAsync("github");

  console.log(JSON.parse(jobs).length);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
