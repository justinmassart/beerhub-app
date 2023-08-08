import React, { useState } from 'react';
import {
  TextInputProps,
  KeyboardTypeOptions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Box from 'atoms/Box';
import View from 'app/Components/Atoms/View';
import Text from 'app/Components/Atoms/Text';

type InputType = 'email' | 'number' | 'phone' | 'text' | 'password' | 'radio';

interface InputFieldProps extends TextInputProps {
  type: InputType;
  radioValue?: boolean;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  radioLabel: {
    marginLeft: 5,
  },
});

const InputField: React.FC<InputFieldProps> = ({
  type,
  radioValue,
  ...rest
}) => {
  const getKeyboardType = (): KeyboardTypeOptions => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'number':
        return 'numeric';
      case 'phone':
        return 'phone-pad';
      case 'password':
        return 'default';
      default:
        return 'default';
    }
  };

  const secureTextEntry = type === 'password';

  if (type === 'radio') {
    const [isYesSelected, setIsYesSelected] = useState<boolean>(false);
    const [isNoSelected, setIsNoSelected] = useState<boolean>(false);
    return (
      <Box>
        <View
          noPadding
          isHorizontal
          alignItems="center"
          justifyContent="center"
          borderRadius={5}
          style={{ backgroundColor: 'white' }}>
          <View noPadding flex={1}>
            <TouchableOpacity
              onPress={() => {
                setIsYesSelected(true);
                setIsNoSelected(false);
              }}>
              <View
                noPadding
                flex={1}
                alignItems="center"
                justifyContent="center"
                style={{
                  height: 37,
                  borderRightWidth: 0.5,
                  borderRightColor: '#0000001A',
                  borderStyle: 'solid',
                  backgroundColor: isYesSelected ? 'orange' : 'white',
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  opacity: !isYesSelected && isNoSelected ? 0.2 : 1,
                }}>
                <Text>Yes</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View noPadding flex={1}>
            <TouchableOpacity
              onPress={() => {
                setIsYesSelected(false);
                setIsNoSelected(true);
              }}>
              <View
                noPadding
                flex={1}
                alignItems="center"
                justifyContent="center"
                style={{
                  height: 37,
                  borderRightWidth: 0.5,
                  borderRightColor: '#0000001A',
                  borderStyle: 'solid',
                  backgroundColor: isNoSelected ? 'orange' : 'white',
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  opacity: !isNoSelected && isYesSelected ? 0.2 : 1,
                }}>
                <Text>No</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Box>
    );
  }

  return (
    <Box color={undefined} radius={undefined}>
      <TextInput
        autoCorrect={false}
        autoCapitalize={
          type === 'email' || type === 'password' ? 'none' : 'words'
        }
        style={styles.input}
        keyboardType={getKeyboardType()}
        secureTextEntry={secureTextEntry}
        value={rest.value}
        onChangeText={rest.onChangeText}
        textContentType={rest.textContentType}
      />
    </Box>
  );
};

interface RadioProps {
  selected: boolean;
}

const Radio: React.FC<RadioProps> = ({ selected }) => {
  return (
    <View
      noPadding
      style={{
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: selected ? 'blue' : 'gray',
        backgroundColor: selected ? 'blue' : 'transparent',
      }}
    />
  );
};

export default InputField;
