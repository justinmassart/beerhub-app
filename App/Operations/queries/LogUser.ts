import axiosInstance from 'app/Providers/Axiosinstance';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const LOG_USER = async (formData: {
  callingCode: string;
  phoneNumber: string;
  password: string;
  device_name: string;
}) => {
  const isFormDataValid = (formData: {
    callingCode: string;
    phoneNumber: string;
    password: string;
    device_name: string;
  }) => {
    const { callingCode, phoneNumber, password, device_name } = formData;

    if (!callingCode || !phoneNumber || !password || !device_name) {
      return false;
    }

    if (
      typeof callingCode !== 'string' ||
      typeof phoneNumber !== 'string' ||
      typeof password !== 'string' ||
      typeof device_name !== 'string'
    ) {
      return false;
    }

    return true;
  };

  if (isFormDataValid(formData)) {
    try {
      const response = await axiosInstance.post(
        `${BACKEND_URL}/login`,
        formData,
      );
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.ERROR) {
        const errorMessage = error.response.data.ERROR;
        throw new Error(errorMessage);
      } else {
        throw new Error('UNKNOWN_ERROR');
      }
    }
  } else {
    return new Error('NOT_ALLOWED');
  }
};

export default LOG_USER;
