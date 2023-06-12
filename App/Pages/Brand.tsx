import React, { useEffect, useState } from 'react';
import { useRoute, RouteProp, ParamListBase } from '@react-navigation/native';
import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import GET_BRAND from 'app/Operations/queries/getBrand';

interface RouteParams {
  brandId?: string;
}

const Brand = () => {
  const { params } = useRoute();
  const [brand, setBrand] = useState(null);

  const getBrand = async (id: string) => {
    try {
      const response = await GET_BRAND(id);
      setBrand(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const { brandId } = params as RouteParams;
    if (brandId) {
      getBrand(brandId);
    }
  }, [params]);

  console.log(brand[0]);

  return (
    <View>
      {brand ? (
        <View>
          <Text>{brand[0]['name']}</Text>
        </View>
      ) : (
        <View>
          <Text>error</Text>
        </View>
      )}
    </View>
  );
};

export default Brand;
