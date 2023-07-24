import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'app/Providers/Axiosinstance';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const REGISTER_USER = async (formData: {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  country: string;
  password: string;
  confirm_password: string;
}) => {
  const isFormDataValid = (formData: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    country: string;
    password: string;
    confirm_password: string;
  }) => {
    const {
      firstname,
      lastname,
      username,
      email,
      country,
      password,
      confirm_password,
    } = formData;

    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !country ||
      !password ||
      !confirm_password
    ) {
      return false;
    }

    if (
      typeof firstname !== 'string' ||
      typeof lastname !== 'string' ||
      typeof username !== 'string' ||
      typeof email !== 'string' ||
      typeof country !== 'string' ||
      typeof password !== 'string' ||
      typeof confirm_password !== 'string'
    ) {
      return false;
    }

    return true;
  };

  if (isFormDataValid(formData)) {
    try {
      await axiosInstance
        .post(`${BACKEND_URL}/register`, formData)
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

export default REGISTER_USER;
