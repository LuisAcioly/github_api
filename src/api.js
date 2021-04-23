import { Octokit } from "@octokit/core";

// const api = axios.create({
//     baseURL: 'https://api.github.com',
// });

const MyOctokit = Octokit.defaults({
    baseUrl: "https://api.github.com",
  });

const api = new MyOctokit();

export default api;