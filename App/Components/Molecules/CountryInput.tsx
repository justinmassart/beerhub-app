import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import i18n from 'app/Services/i18n';

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
    <Box height={37} radius={5}>
      <View noPadding isHorizontal alignItems="center">
        <View noPadding flex={1}>
          <TouchableOpacity onPress={handleCountryPickerOpen}>
            <View
              noPadding
              isHorizontal
              alignItems="center"
              justifyContent="space-around">
              <CountryPicker
                preferredCountries={[countryCode]}
                translation={handleCountryPickerTranslation()}
                withCountryNameButton={true}
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

export default CountryInput;
