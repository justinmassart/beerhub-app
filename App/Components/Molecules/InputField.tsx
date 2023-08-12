import React from 'react';
import { TextInputProps, KeyboardTypeOptions, TextInput } from 'react-native';

import Box from 'atoms/Box';

type InputType = 'email' | 'number' | 'phone' | 'text' | 'password';

interface InputFieldProps extends TextInputProps {
  type: InputType;
}

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
    <Box
      color={undefined}
      radius={5}
      style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
      <TextInput
        autoCorrect={false}
        autoCapitalize={
          type === 'email' || type === 'password' ? 'none' : 'words'
        }
        style={{
          padding: 10,
        }}
        keyboardType={getKeyboardType()}
        secureTextEntry={secureTextEntry}
        value={rest.value}
        onChangeText={rest.onChangeText}
        textContentType={rest.textContentType}
        placeholder={rest.placeholder}
      />
    </Box>
  );
};

export default InputField;
