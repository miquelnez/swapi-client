import axios from 'axios';
import { RequestsOptions } from '../types/types';

const client = (() => {
  return axios.create({
    baseURL: process.env.REACT_APP_SWAPI_ENDPOINT,
  });
})();

const request = async function (options: RequestsOptions) {
  // success handler
  const onSuccess = function (response: any) {
    // const {
    //   data: { data },
    // } = response;
    return response;
  };

  // error handler
  const onError = function (error: any) {
    return Promise.reject(error.response);
  };

  // adding success and error handlers to client
  return client(options).then(onSuccess).catch(onError);
};

export default request;
