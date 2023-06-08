import React from 'react';
import { StyleSheet } from 'react-native';
import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';

const styles = StyleSheet.create({
  valueSize: {
    maxWidth: '50%',
  },
  itemStyle: {
    lineHeight: 20,
    textAlign: 'right',
  },
});

const BeerInformationsItem = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <View noPaddingVertical>
      <View noPaddingHorizontal isHorizontal justifyContent="space-between">
        <View noPadding>
          <Text>{title} :</Text>
        </View>
        <View noPadding style={styles.valueSize}>
          <Text style={styles.itemStyle}>{value}</Text>
        </View>
      </View>
      <View
        noPadding
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
        }}
      />
    </View>
  );
};

export default BeerInformationsItem;
