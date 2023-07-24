import i18n from 'app/Services/i18n';
import Config from 'react-native-config';
import axiosInstance from 'app/Providers/Axiosinstance';

const { BACKEND_URL } = Config;

const GET_BEERS = async (pageCount?: number) => {
  const locale = i18n.language;
  const pagination = pageCount ?? 1;
  try {
    const response = await axiosInstance.get(
      `${BACKEND_URL}/${locale}/beers?page=${pagination}`,
    );
    const data = response.data.beers;
    return data;
  } catch (error) {
    throw error;
  }
};

export default GET_BEERS;
