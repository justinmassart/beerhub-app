import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import i18n from 'app/Services/i18n';

import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import Box from '../Atoms/Box';

const PhoneNumberInput = ({
  countryCode,
  countryCallingCode,
  countryFlag,
  onCountryChange,
  onPhoneNumberChange,
}) => {
  const [countryPickerVisible, setCountryPickerVisible] =
    useState<boolean>(false);
  const [countryPhoneCode, setCountryPhoneCode] = useState<string>('');

  const locale = i18n.language;

  const handleCountryPickerOpen = () => {
    setCountryPickerVisible(true);
  };

  const handleCountrySelect = country => {
    countryFlag(country.cca2);
    onCountryChange(country.callingCode[0]);
    setCountryPickerVisible(false);
    setCountryPhoneCode(country.callingCode[0]);
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

  useEffect(() => {
    setCountryPhoneCode(countryCallingCode);
  }, [countryCallingCode]);

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
                withCallingCode={true}
                countryCode={countryCode}
                visible={countryPickerVisible}
                onSelect={handleCountrySelect}
                onClose={() => setCountryPickerVisible(false)}
              />
              <Text style={{ fontSize: 14 }}>+{countryPhoneCode}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View noPadding flex={3}>
          <TextInput
            autoCorrect={false}
            style={styles.phoneInputStyle}
            keyboardType={'phone-pad'}
            onChangeText={onPhoneNumberChange}
          />
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

export default PhoneNumberInput;
