import i18n from 'app/Services/i18n';
import axios from 'axios';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const GET_BEERS = async (pageCount?: number) => {
  const locale = i18n.language;
  const pagination = pageCount ?? 1;
  console.log(`${BACKEND_URL}/${locale}/beers?page=${pagination}`);
  try {
    const response = await axios.get(
      `${BACKEND_URL}/${locale}/beers?page=${pagination}`,
    );
    const data = response.data.beers;
    return data;
  } catch (error) {
    throw error;
  }
};

export default GET_BEERS;
