import React from 'react';
import {
  TextInputProps,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
} from 'react-native';

import Box from 'atoms/Box';

type InputType = 'email' | 'number' | 'phone' | 'text' | 'password';

interface InputFieldProps extends TextInputProps {
  type: InputType;
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

const InputField: React.FC<InputFieldProps> = ({ type, ...rest }) => {
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

export default InputField;
