// import axios from 'axios';
// import { default as axios } from 'axios';
// import { setupCache } from 'axios-cache-interceptor';
import { RequestsOptions } from '../types/types';

const baseURL = process.env.REACT_APP_SWAPI_ENDPOINT;

// const client = (() => {
//   return setupCache(
//     axios.create({
//       baseURL: process.env.REACT_APP_SWAPI_ENDPOINT,
//     })
//   );
// })();

// const client = (() => {
//   return axios.create({
//     baseURL: process.env.REACT_APP_SWAPI_ENDPOINT,
//   });
// })();

async function getData(url = '') {
  const response = await fetch(`${baseURL}${url}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'force-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const request = async function (options: RequestsOptions) {
  // success handler
  const onSuccess = function (response: any) {
    return response;
  };

  // error handler
  const onError = function (error: any) {
    return Promise.reject(error.response);
  };

  // adding success and error handlers to client
  // return client(options).then(onSuccess).catch(onError);
  return getData(options.url).then(onSuccess).catch(onError);
};

export default request;
