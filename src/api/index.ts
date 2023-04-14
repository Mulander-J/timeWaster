import axios from 'axios';

// TODO:change to your own git repo
const gitConf = {
  owner: "Mulander-J",
  repo: "timeWaster",
  label: "heart"
}

const { owner, repo, label } = gitConf;
const url = `https://api.github.com/repos/${owner}/${repo}`;

export default class Api {
  static getIssueList = (since?: string): Promise<any> => {
    since = since ? '&since=' + since : '';
    return axios.get(`${url}/issues?filter=created&labels=${label + since}`);
  };
  static addIssue = (body: string, token: string): any => {
    return axios.post(`${url}/issues`, {
      labels: [label],
      title: 'TW/' + new Date().toLocaleDateString(),
      body,
    },{
      headers: { 'Authorization': 'token ' + token }
    });
  };
}
