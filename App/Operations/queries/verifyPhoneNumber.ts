import axiosInstance from 'app/Providers/Axiosinstance';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const VERIFY_PHONE_NUMBER = async (formData: {
  code: number;
  phone: string;
}) => {
  const isFormDataValid = (formData: { code: number; phone: string }) => {
    if (!formData.code || !formData.phone) {
      throw new Error('FORM_NOT_COMPLETED');
    }
    if (
      typeof formData.code !== 'number' ||
      typeof formData.phone !== 'string'
    ) {
      throw new Error('INVALID_FORM_DATA_TYPE');
    }

    return true;
  };

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
