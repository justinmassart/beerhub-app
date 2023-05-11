import React, {useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import AppLifecycleProvider from './Providers/AppLifeycleProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import I18nProvider from './Providers/I18nProvider';
import {AnchorProvider} from '@nandorojo/anchor';
import {getTheme} from './Themes';
import Navigation from './Navigation/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDefaultLanguage} from './Config/Languages';

const lng = getDefaultLanguage();
console.log(lng);

const App = () => {
  const theme = getTheme(false);
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared successfully.');
    } catch (error) {
      console.log('Error clearing AsyncStorage:', error);
    }
  };

  useEffect(() => {
    const handleAppStateChange = async (state: AppStateStatus) => {
      if (state === 'background' || state === 'inactive') {
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
                <Navigation />
              </AnchorProvider>
            </I18nProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </AppLifecycleProvider>
    </>
  );
};

export default App;
