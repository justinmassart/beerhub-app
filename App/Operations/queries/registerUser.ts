import i18n from 'app/Services/i18n';
import axios from 'axios';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const REGISTER_USER = async (formData: {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  country: string;
  password: string;
  confirm_password: string;
}) => {
  const locale = i18n.language;

  const isFormDataValid = formData => {
    const {
      first_name,
      last_name,
      username,
      email,
      country,
      password,
      confirm_password,
    } = formData;

    if (
      !first_name ||
      !last_name ||
      !username ||
      !email ||
      !country ||
      !password ||
      !confirm_password
    ) {
      return false;
    }

    if (
      typeof first_name !== 'string' ||
      typeof last_name !== 'string' ||
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
        `${BACKEND_URL}/${locale}/register`,
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
