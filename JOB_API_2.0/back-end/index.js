const http = require("http");
const url = require('url');
const axios = require('axios');
const chalk = require('chalk');
const hostname = '127.0.0.1';
const port = 2000;

const base_url = 'https://findwork.dev/api/jobs/';

const axiosHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', 
    'Authorization': 'Token d8d09fa002ea2b0b85955dc48ec97f5647f7cc8d'
}

const Server = http.createServer((req, res) => {
    console.log("server req=" + req);

    const requestURL = url.parse(req.url);
    console.log("server requestURL=" + JSON.stringify(requestURL));
    const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
    console.log("server decodedParams=" + JSON.stringify(decodedParams))
    const { search } = decodedParams;

    const targetURL = base_url + "?search=" + search;
    if (req.method === 'GET') {
        console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
        axios.get(targetURL, { headers: axiosHeaders })
            .then(response => {
                res.writeHead(200, axiosHeaders);
                res.end(JSON.stringify(response.data));
            })
            .catch(response => {
                console.log(chalk.red(response));
                res.writeHead(500, axiosHeaders);
                res.end(JSON.stringify(response));
            });
    }
})

Server.listen(port, hostname, () => {
    console.log(`Server running at  port:${port}`);
})

const decodeParams = searchParams => Array
    .from(searchParams.keys())
    .reduce((acc, key) => ({ ...acc, [key]: searchParams.get(key) }), {});