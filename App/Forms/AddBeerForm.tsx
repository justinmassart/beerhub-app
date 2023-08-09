import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from 'app/Components/Atoms/Text';
import View from 'app/Components/Atoms/View';

import InputField from 'app/Components/Molecules/InputField';
import YesOrNoForm from './YesOrNoForm';
import STORE_BEER from 'app/Operations/queries/storeBeer';
import { useAuth } from 'app/Hooks/Me';

type FormData = {
  name: string;
  brand: string;
  country: string;
  type: string;
  color: string;
  abv: number;
  volume_available?: [string];
  container_available?: [string];
  aromas?: [string];
  ingredients?: [string];
  ibu?: number;
  is_gluten_free?: boolean;
  is_from_abbey?: boolean;
  non_filtered?: boolean;
  refermented?: boolean;
};

const AddBeerForm = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [completeForm, setCompleteForm] = useState<boolean>(false);
  const rotateValue = useRef(new Animated.Value(0)).current;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    brand: '',
    country: '',
    type: '',
    color: '',
    abv: 0,
  });

  const { me } = useAuth();

  const rotateIcon = () => {
    const toValue = completeForm ? 0 : 180;
    Animated.timing(rotateValue, {
      toValue,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleFormVerification = () => {
    formData.abv;
    const isFormComplete =
      Object.values(formData).every(value => value !== '') &&
      formData.abv !== 0 &&
      !isNaN(formData.abv) &&
      /^[a-zA-Z0-9]+$/.test(formData?.name) &&
      /^[a-zA-Z0-9]+$/.test(formData?.brand) &&
      /^^[A-Za-z-]+$/.test(formData?.country) &&
      /^^[A-Za-z-]+$/.test(formData?.type) &&
      /^^[A-Za-z-]+$/.test(formData?.color);
    setIsFormValid(isFormComplete);
  };

  const handleSubmit = async () => {
    if (me) {
      try {
        const response = await STORE_BEER(formData, me?.authToken);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      throw new Error('NOT_ALLOWED');
    }
  };

  useEffect(() => {
    handleFormVerification();
  }, [formData]);

  return (
    <View noPadding>
      <View noPaddingHorizontal>
        <View noPaddingHorizontal>
          <Text>Name</Text>
          <InputField
            type="text"
            onChangeText={(value: string) =>
              setFormData({ ...formData, name: value })
            }
          />
        </View>
        <View noPaddingHorizontal>
          <Text>Brand</Text>
          <InputField
            type="text"
            onChangeText={(value: string) =>
              setFormData({ ...formData, brand: value })
            }
          />
        </View>
        <View noPaddingHorizontal>
          <Text>Country</Text>
          <InputField
            type="text"
            onChangeText={(value: string) =>
              setFormData({ ...formData, country: value })
            }
          />
        </View>
        <View noPaddingHorizontal>
          <Text>Type</Text>
          <InputField
            type="text"
            onChangeText={(value: string) =>
              setFormData({ ...formData, type: value })
            }
          />
        </View>
        <View noPaddingHorizontal>
          <Text>Color</Text>
          <InputField
            type="text"
            onChangeText={(value: string) =>
              setFormData({ ...formData, color: value })
            }
          />
        </View>
        <View noPaddingHorizontal>
          <Text>ABV</Text>
          <InputField
            type="number"
            onChangeText={(value: string) => {
              const formValue = value.replace(',', '.');
              setFormData({ ...formData, abv: Number(formValue) });
            }}
          />
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
            <InputField
              type="text"
              onChangeText={(value: string) =>
                setFormData({ ...formData, volume_available: [value] })
              }
            />
          </View>
          <View noPaddingHorizontal>
            <Text>Container Available</Text>
            <InputField
              type="text"
              onChangeText={(value: string) =>
                setFormData({ ...formData, container_available: [value] })
              }
            />
          </View>
          <View noPaddingHorizontal>
            <Text>Aromas</Text>
            <InputField
              type="text"
              onChangeText={(value: string) =>
                setFormData({ ...formData, aromas: [value] })
              }
            />
          </View>
          <View noPaddingHorizontal>
            <Text>Ingredients</Text>
            <InputField
              type="text"
              onChangeText={(value: string) =>
                setFormData({ ...formData, ingredients: [value] })
              }
            />
          </View>
          <View noPaddingHorizontal>
            <Text>IBU</Text>
            {/* TODO: display form errors and make the form validation with the form errors */}
            <InputField
              type="text"
              onChangeText={(value: string) => {
                const formValue = value.replace(',', '.');
                if (Number(formValue) !== 0)
                  setFormData({ ...formData, ibu: Number(formValue) });
              }}
            />
          </View>
          <View noPaddingHorizontal>
            <Text>is the beer gluten free ?</Text>
            <YesOrNoForm
              formValue={(value: boolean) =>
                setFormData({ ...formData, is_gluten_free: value })
              }
            />
          </View>
          <View noPaddingHorizontal>
            <Text>Is the beer from an Abbey ?</Text>
            <YesOrNoForm
              formValue={(value: boolean) =>
                setFormData({ ...formData, is_from_abbey: value })
              }
            />
          </View>
          <View noPaddingHorizontal>
            <Text>Is the beer non-filtered ?</Text>
            <YesOrNoForm
              formValue={(value: boolean) =>
                setFormData({ ...formData, non_filtered: value })
              }
            />
          </View>
          <View noPaddingHorizontal>
            <Text>Is the beer refermented ?</Text>
            <YesOrNoForm
              formValue={(value: boolean) =>
                setFormData({ ...formData, refermented: value })
              }
            />
          </View>
        </View>
      )}
      <View noPaddingHorizontal>
        <TouchableOpacity
          disabled={!isFormValid}
          style={{
            backgroundColor: 'white',
            padding: 10,
            opacity: !isFormValid ? 0.4 : 1,
          }}
          onPress={handleSubmit}>
          <Text>Add the beer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBeerForm;
