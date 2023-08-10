import axiosInstance from 'app/Providers/Axiosinstance';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const REGISTER_USER = async (formData: {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phoneNumber: string;
  callingCode: string;
  country: string;
  password: string;
  confirm_password: string;
}) => {
  const isFormDataValid = (formData: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    phoneNumber: string;
    callingCode: string;
    country: string;
    password: string;
    confirm_password: string;
  }) => {
    const {
      firstname,
      lastname,
      username,
      email,
      phoneNumber,
      callingCode,
      country,
      password,
      confirm_password,
    } = formData;

    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !phoneNumber ||
      !callingCode ||
      !country ||
      !password ||
      !confirm_password
    ) {
      throw new Error('FORM_NOT_COMPLETED');
    }

    if (
      typeof firstname !== 'string' ||
      typeof lastname !== 'string' ||
      typeof username !== 'string' ||
      typeof email !== 'string' ||
      typeof phoneNumber !== 'string' ||
      typeof callingCode !== 'string' ||
      typeof country !== 'string' ||
      typeof password !== 'string' ||
      typeof confirm_password !== 'string'
    ) {
      throw new Error('INVALID_FORM_DATA_TYPE');
    }

    return true;
  };

  console.log(formData);

  if (isFormDataValid(formData)) {
    try {
      const response = await axiosInstance.post(
        `${BACKEND_URL}/register`,
        formData,
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.ERROR) {
        const errorMessage = error.response.data.ERROR;
        console.log(errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error('UNKNOWN_ERROR');
      }
    }
  } else {
    return new Error('NOT_ALLOWED');
  }
};

export default REGISTER_USER;
