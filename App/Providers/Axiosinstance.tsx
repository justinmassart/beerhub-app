import axios from 'axios';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

axiosInstance.interceptors.request.use(config => {
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';

  return config;
});

export default axiosInstance;
