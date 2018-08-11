import 'isomorphic-fetch';
import config from 'config';
import { checkStatus, getResponseJSON } from '../helpers/apiHelper';

function postAuthAPI (endpoint, params) {
  const { authenticationServiceURL } = config;
  return fetch(`${authenticationServiceURL}/${endpoint}`, {
      method: 'POST',
      headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
      },
      body: JSON.stringify(params)
  });
}

const api = {
  postLogin: async (data) => {
    const result = await postAuthAPI('api/login', data);
    checkStatus(result);
    return getResponseJSON(result);
  }
}

export default api;