import i18n from 'app/Services/i18n';
import axiosInstance from 'app/Providers/Axiosinstance';
import Config from 'react-native-config';

const { BACKEND_URL } = Config;

const GET_PLACES = async (pageCount?: number) => {
  const locale = i18n.language;
  const pagination = pageCount ?? 1;
  try {
    const response = await axiosInstance.get(
      `${BACKEND_URL}/${locale}/places?page=${pagination}`,
    );
    const data = response.data.places;
    return data;
  } catch (error) {
    throw error;
  }
};

export default GET_PLACES;
