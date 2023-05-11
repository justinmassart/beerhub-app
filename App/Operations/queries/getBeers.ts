import i18n from 'app/Services/i18n';
import axios from 'axios';
import Config from 'react-native-config';

const {BACKEND_URL} = Config;

const lang = i18n.language;

const GET_BEERS = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/${lang}/beers`);
    const data = response.data.beers;
    return data;
  } catch (error) {
    throw error;
  }
};

export default GET_BEERS;
