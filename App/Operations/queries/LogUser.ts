import axios, { AxiosError, AxiosResponse } from 'axios';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const LOG_USER = async (formData: {
  email: string;
  password: string;
  device_name: string;
}) => {
  const isFormDataValid = (formData: {
    email: string;
    password: string;
    device_name: string;
  }) => {
    const { email, password, device_name } = formData;

    if (!email || !password || !device_name) {
      return false;
    }

    if (
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      typeof device_name !== 'string'
    ) {
      return false;
    }

    return true;
  };

  if (isFormDataValid(formData)) {
    try {
      await axios
        .post(`${BACKEND_URL}/login`, formData)
        .then((response: AxiosResponse) => {
          console.log(response.data);
        })
        .catch((error: AxiosError) => {
          if (error.response) {
            const responseData = error.response.data;
            if (responseData && responseData.message) {
              const errorMessage = responseData.message;
              console.log(errorMessage);
            }
          } else if (error.request) {
            console.log('No response received');
          } else {
            console.log('Error', error.message);
          }
        });
    } catch (error) {
      throw error;
    }
  } else {
    return new Error('NOT_ALLOWED');
  }
};

export default LOG_USER;
