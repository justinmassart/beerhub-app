import axios from 'axios';
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
      const response = await axios.post(`${BACKEND_URL}/login`, formData);
      // Handle the successful response here if needed
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.ERROR) {
        const errorMessage = error.response.data.ERROR;
        console.log(errorMessage);
      } else {
        console.log('Unexpected error occurred.');
      }
      throw error;
    }
  } else {
    return new Error('NOT_ALLOWED');
  }
};

export default LOG_USER;
