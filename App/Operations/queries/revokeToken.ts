import Config from 'react-native-config';
import axiosInstance from 'app/Providers/Axiosinstance';

const { BACKEND_URL } = Config;

const REVOKE_TOKEN = async (id: string, authToken: string) => {
  if (id) {
    try {
      const response = await axiosInstance.post(
        `${BACKEND_URL}/logout`,
        { id },
        { headers: { Authorization: `Bearer ${authToken}` } },
      );
      const data = response.data;
      console.log(data);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.ERROR) {
        const errorMessage = error.response.data.ERROR;
        throw new Error(errorMessage);
      } else {
        throw new Error('UNKNOWN_ERROR');
      }
    }
  }
};

export default REVOKE_TOKEN;
