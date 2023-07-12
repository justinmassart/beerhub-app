import React from 'react';
import {
  TextInput,
  TextInputProps,
  KeyboardTypeOptions,
  StyleSheet,
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
        style={styles.input}
        keyboardType={getKeyboardType()}
        secureTextEntry={secureTextEntry}
      />
    </Box>
  );
};

export default InputField;
