import Config from 'react-native-config';
import axiosInstance from 'app/Providers/Axiosinstance';

const { BACKEND_URL } = Config;

const STORE_BEER = async (
  formData: {
    name: string;
    brand: string;
    country: string;
    type: string;
    color: string;
    abv: number;
    volume_available?: string[];
    container_available?: string[];
    aromas?: string[];
    ingredients?: string[];
    ibu?: number;
    is_gluten_free?: boolean;
    is_from_abbey?: boolean;
    non_filtered?: boolean;
    refermented?: boolean;
  },
  authToken: string,
) => {
  try {
    const response = await axiosInstance.post(
      `${BACKEND_URL}/beers/store`,
      formData,
      { headers: { Authorization: `Bearer ${authToken}` } },
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
};

export default STORE_BEER;
