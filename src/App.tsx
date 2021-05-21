import React from 'react';
import {store} from './redux/store';
import Routes from './navigation/routes';
import {Provider as ReduxProvider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDarkTheme, CombinedLightTheme} from './utils/Theme';

const App = () => {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <ReduxProvider store={store}>
        <NavigationContainer theme={CombinedDarkTheme}>
          <Routes />
        </NavigationContainer>
      </ReduxProvider>
    </PaperProvider>
  );
};

export default App;
