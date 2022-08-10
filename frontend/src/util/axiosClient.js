import axios from 'axios'

const BASE_URL = "http://ec2-65-0-118-1.ap-south-1.compute.amazonaws.com:1337/api"

const axiosclient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000
})

axiosclient.interceptors.request.use(async (config) => {
  return config;
}, function(err) {
  return Promise.reject(err);
});

axiosclient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  console.log("Response came: ", response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  console.log("Response Error: ", error.response.data)
  return Promise.reject(error);
});

export default axiosclient