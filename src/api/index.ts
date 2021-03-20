import axios from 'axios';
import pkg from './../../package.json';

const { owner, repo, label } = pkg.config;
const url = `https://api.github.com/repos/${owner}/${repo}`;

const auth = 'access_token=a5c1257e6c7416ef9ce18c6a756de581e0aeed95';

export default class Api {
  static getIssueList = (since?: string): Promise<any> => {
    since = since ? '&since=' + since : '';
    return axios.get(`${url}/issues?filter=created&labels=${label + since}`);
  };
  static addIssue = (body: string): Promise<any> => {
    return axios.post(`${url}/issues?${auth}`, {
      labels: label,
      title: 'TW/' + new Date().toLocaleDateString(),
      body,
    });
  };
}
