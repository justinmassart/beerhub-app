import axiosInstance from 'app/Providers/Axiosinstance';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const GET_BRANDS_INPUTS = async (searchTerm: string) => {
  if (searchTerm) {
    try {
      const response = await axiosInstance.get(
        `${BACKEND_URL}/search-inputs/brand-selector?search_term=${searchTerm}`,
      );
      return response;
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
  }
};

export default GET_BRANDS_INPUTS;
