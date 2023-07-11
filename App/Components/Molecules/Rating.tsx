import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Rating = ({ rating }) => {
  const filledSymbols = Math.floor(rating);
  const hasHalfSymbol = rating - filledSymbols >= 0.5;

  const filledSymbolIcons = Array.from(
    { length: filledSymbols },
    (_, index) => (
      <Icon key={`filled-${index}`} name="star" size={20} color="#EB5E28" />
    ),
  );

  const halfSymbolIcon = hasHalfSymbol ? (
    <Icon name="star-half-empty" size={20} color="#EB5E28" key="half" />
  ) : null;

  const emptySymbolIcons = Array.from(
    { length: 5 - filledSymbols - (hasHalfSymbol ? 1 : 0) },
    (_, index) => (
      <Icon key={`empty-${index}`} name="star-o" size={20} color="#EB5E28" />
    ),
  );

  return (
    <View style={styles.container}>
      {filledSymbolIcons}
      {halfSymbolIcon}
      {emptySymbolIcons}
    </View>
  );
};

export default Rating;
