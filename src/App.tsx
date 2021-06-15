import React, {useContext, useState, useEffect} from 'react';
import {store} from './redux/store';
import Routes from './navigation/routes';
import {Provider as ReduxProvider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {CombinedDarkTheme, CombinedLightTheme} from './utils/Theme';
import {ThemeContext} from './context/ThemeCotext';
import axios from 'axios';
import {Home} from '~screens';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteStackParams} from '../src/definitions/navigationTypes';
import HomeStack from '../src/navigation/HomeStack';

import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

const Stack = createStackNavigator<RouteStackParams>();

const App = () => {
  const [user, setUser] = useState(undefined);
  const [dark, setDark] = useState(true);
  const theme = dark ? CombinedDarkTheme : CombinedLightTheme;
  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    myFunction();
  }, []);

  const myFunction = () => {
    axios
      .get(
        'https://us-central1-sapa-4bd2e.cloudfunctions.net/api/authenticated',
      )
      .then(res => {
        if (res.data) {
          setUser(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <PaperProvider theme={theme}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer theme={theme}>
              {user ? (
                <Stack.Navigator
                  screenOptions={{headerShown: false, gestureEnabled: false}}>
                  <Stack.Screen name="Home" component={HomeStack} />
                </Stack.Navigator>
              ) : (
                <Routes />
              )}
              {/* <Routes /> */}
            </NavigationContainer>
          </PersistGate>
        </ReduxProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default App;
