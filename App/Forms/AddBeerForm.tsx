import React, { useState, useRef } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';

import InputField from 'app/Components/Molecules/InputField';

const AddBeerForm = () => {
  const [completeForm, setCompleteForm] = useState<boolean>(false);
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotateIcon = () => {
    const toValue = completeForm ? 0 : 180;
    Animated.timing(rotateValue, {
      toValue,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View noPadding>
      <View noPaddingHorizontal>
        <View noPaddingHorizontal>
          <Text>Name</Text>
          <InputField type="text" />
        </View>
        <View noPaddingHorizontal>
          <Text>Brand</Text>
          <InputField type="text" />
        </View>
        <View noPaddingHorizontal>
          <Text>Country</Text>
          <InputField type="text" />
        </View>
        <View noPaddingHorizontal>
          <Text>Type</Text>
          <InputField type="text" />
        </View>
        <View noPaddingHorizontal>
          <Text>Color</Text>
          <InputField type="text" />
        </View>
        <View noPaddingHorizontal>
          <Text>ABV</Text>
          <InputField type="number" />
        </View>
      </View>
      <View noPadding alignItems="center">
        <TouchableOpacity
          onPress={() => {
            rotateIcon();
            setCompleteForm(!completeForm);
          }}>
          <View
            noPaddingHorizontal
            isHorizontal
            alignItems="center"
            justifyContent="center">
            <Text style={{ marginRight: 10 }}>
              {completeForm
                ? 'Press here to go back to a simplier form'
                : 'Press here to have a more complete form'}
            </Text>
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: rotateValue.interpolate({
                      inputRange: [0, 180],
                      outputRange: ['0deg', '180deg'],
                    }),
                  },
                ],
              }}>
              <Icon name="arrow-down-drop-circle-outline" size={15} />
            </Animated.View>
          </View>
        </TouchableOpacity>
        {!completeForm && (
          <View noPaddingHorizontal>
            <Text>or</Text>
          </View>
        )}
      </View>
      {completeForm && (
        <View noPadding>
          <View noPaddingHorizontal>
            <Text>Volume Available</Text>
            <InputField type="text" />
          </View>
          <View noPaddingHorizontal>
            <Text>Container Available</Text>
            <InputField type="text" />
          </View>
          <View noPaddingHorizontal>
            <Text>Aromas</Text>
            <InputField type="text" />
          </View>
          <View noPaddingHorizontal>
            <Text>Ingredients</Text>
            <InputField type="text" />
          </View>
          <View noPaddingHorizontal>
            <Text>IBU</Text>
            <InputField type="text" />
          </View>
          <View noPaddingHorizontal>
            <Text>is the beer gluten free ?</Text>
            <InputField type="radio" radioValue={false} />
          </View>
          <View noPaddingHorizontal>
            <Text>Is the beer from an Abbey ?</Text>
            <InputField type="radio" />
          </View>
          <View noPaddingHorizontal>
            <Text>Is the beer non-filtered ?</Text>
            <InputField type="radio" />
          </View>
          <View noPaddingHorizontal>
            <Text>Is the beer refermented ?</Text>
            <InputField type="radio" />
          </View>
        </View>
      )}
      <View noPaddingHorizontal>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 10,
          }}
          onPress={() => console.log('Add beer')}>
          <Text>Add the beer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBeerForm;
