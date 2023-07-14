import i18n from 'app/Services/i18n';
import axios from 'axios';
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
  const locale = i18n.language;

  const isFormDataValid = formData => {
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
      const response = await axios.post(
        `${BACKEND_URL}/users/register`,
        formData,
      );
      return response;
    } catch (error) {
      throw error;
    }
  } else {
    return new Error('NOT_ALLOWED');
  }
};

export default REGISTER_USER;
