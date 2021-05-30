import React, {useContext, useState} from 'react';
import {store} from './redux/store';
import Routes from './navigation/routes';
import {Provider as ReduxProvider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDarkTheme, CombinedLightTheme} from './utils/Theme';
import {ThemeContext} from './context/ThemeCotext';

const App = () => {
  const [dark, setDark] = useState(true);
  const theme = dark ? CombinedDarkTheme : CombinedLightTheme;
  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <PaperProvider theme={theme}>
        <ReduxProvider store={store}>
          <NavigationContainer theme={theme}>
            <Routes />
          </NavigationContainer>
        </ReduxProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default App;
