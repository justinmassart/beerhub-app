import Config from 'react-native-config';
import axiosInstance from 'app/Providers/Axiosinstance';

const { BACKEND_URL } = Config;

const REVOKE_TOKEN = async (id: string) => {
  console.log(id);
  if (id) {
    try {
      const response = await axiosInstance.post(`${BACKEND_URL}/logout`, {
        id,
      });
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
};

export default REVOKE_TOKEN;
