import React, { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import AppLifecycleProvider from './Providers/AppLifeycleProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import I18nProvider from './Providers/I18nProvider';
import { AnchorProvider } from '@nandorojo/anchor';
import { getTheme } from './Themes';
import Navigation from './Navigation/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from 'app/Hooks/Me';
import { getCountryInfoAsync } from 'react-native-country-picker-modal/lib/CountryService';
import * as RNLocalize from 'react-native-localize';

const App: React.FC = () => {
  const theme = getTheme(false);

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.multiRemove(['beers', 'places']);
      console.log('AsyncStorage cleared successfully.');
    } catch (error) {
      console.log('Error clearing AsyncStorage:', error);
    }
  };

  const getUserCountryInfo = async () => {
    const userCountry = await AsyncStorage.getItem('userCountryData');
    if (!userCountry) {
      const countryCode = RNLocalize.getCountry();
      const countryData = await getCountryInfoAsync({
        countryCode,
      });
      await AsyncStorage.setItem(
        'userCountryData',
        JSON.stringify(countryData),
      );
    }
  };

  useEffect(() => {
    getUserCountryInfo();
    const handleAppStateChange = async (state: AppStateStatus) => {
      if (state === 'inactive') {
        await clearAsyncStorage();
      }
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.addEventListener('change', handleAppStateChange).remove();
    };
  }, []);

  return (
    <>
      <AppLifecycleProvider>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <I18nProvider>
              <AnchorProvider horizontal={undefined}>
                <AuthProvider>
                  <Navigation />
                </AuthProvider>
              </AnchorProvider>
            </I18nProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </AppLifecycleProvider>
    </>
  );
};

export default App;
