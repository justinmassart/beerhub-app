import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import i18n from 'app/Services/i18n';

import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import Box from '../Atoms/Box';

const CountryInput = ({ countryCode, onCountryChange }) => {
  const [countryPickerVisible, setCountryPickerVisible] =
    useState<boolean>(false);

  const locale = i18n.language;

  const handleCountryPickerOpen = () => {
    setCountryPickerVisible(true);
  };

  const handleCountrySelect = country => {
    onCountryChange(country.cca2);
    setCountryPickerVisible(false);
  };

  const handleCountryPickerTranslation = () => {
    switch (locale) {
      case 'fr':
        return 'fra';
      case 'en':
        return 'common';
      default:
        return 'common';
    }
  };

  return (
    <Box height={37}>
      <View noPadding isHorizontal alignItems="center">
        <View noPadding flex={1}>
          <TouchableOpacity
            onPress={handleCountryPickerOpen}
            style={styles.containerStyle}>
            <View
              noPadding
              isHorizontal
              alignItems="center"
              justifyContent="space-around">
              <CountryPicker
                preferredCountries={[countryCode]}
                translation={handleCountryPickerTranslation()}
                withModal={true}
                withFilter={true}
                withCloseButton={true}
                withCallingCode={false}
                countryCode={countryCode}
                visible={countryPickerVisible}
                onSelect={handleCountrySelect}
                onClose={() => setCountryPickerVisible(false)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Box>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderColor: '#0000001A',
  },
  phoneInputStyle: {
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
};

export default CountryInput;
