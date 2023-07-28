import axiosInstance from 'app/Providers/Axiosinstance';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const VERIFY_PHONE_NUMBER = async (formData: { code: number }) => {
  const isFormDataValid = (formData: { code: number }) => {
    if (!formData.code) {
      throw new Error('FORM_NOT_COMPLETED');
    }
    if (typeof formData.code !== 'number') {
      throw new Error('INVALID_FORM_DATA_TYPE');
    }

    return true;
  };

  console.log(formData.code);
  if (isFormDataValid(formData)) {
    try {
      const response = await axiosInstance.post(
        `${BACKEND_URL}/verify`,
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

export default VERIFY_PHONE_NUMBER;
