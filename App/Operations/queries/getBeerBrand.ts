import i18n from 'app/Services/i18n';
import axios from 'axios';
import Config from 'react-native-config';

const {BACKEND_URL} = Config;

const GET_BEER_BRAND = async (brandId: string) => {
  const locale = i18n.language;
  try {
    const response = await axios.get(
      `${BACKEND_URL}/${locale}/brand?id=${brandId}`,
    );
    const data = response.data.brand;
    return data;
  } catch (error) {
    throw error;
  }
};

export default GET_BEER_BRAND;