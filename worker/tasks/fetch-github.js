let fetch = require('node-fetch');

export default async function fetchGithub() {
    const jobs = await fetch('https://jobs.github.com/positions.json?description=javascript');
}

fetchGithub();