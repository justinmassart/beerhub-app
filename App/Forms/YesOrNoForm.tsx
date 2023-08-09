import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';
import Box from 'app/Components/Atoms/Box';

const YesOrNoForm = ({ formValue }) => {
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
              formValue(true);
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
              formValue(false);
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
};

export default YesOrNoForm;
