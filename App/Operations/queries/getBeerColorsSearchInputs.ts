import axiosInstance from 'app/Providers/Axiosinstance';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const GET_BEER_COLORS_SEARCH_INPUTS = async () => {
  try {
    const response = await axiosInstance.get(
      `${BACKEND_URL}/search-inputs/beer-color-selector`,
    );
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
};

export default GET_BEER_COLORS_SEARCH_INPUTS;
