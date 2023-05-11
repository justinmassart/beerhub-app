import React from 'react';
import AppLifecycleProvider from './Providers/AppLifeycleProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import I18nProvider from './Providers/I18nProvider';
import {AnchorProvider} from '@nandorojo/anchor';
import {getTheme} from './Themes';
import Navigation from './Navigation/index';

const App = () => {
  const theme = getTheme(false);
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
