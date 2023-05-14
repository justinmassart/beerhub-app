import i18n from 'app/Services/i18n';
import axios from 'axios';
import Config from 'react-native-config';

const {BACKEND_URL} = Config;

const GET_BEERS = async () => {
  const locale = i18n.language;
  try {
    const response = await axios.get(`${BACKEND_URL}/${locale}/beers`);
    const data = response.data.beers;
    return data;
  } catch (error) {
    throw error;
  }
};

export default GET_BEERS;
