import React, {useContext, useState, useEffect} from 'react';
import {store} from './redux/store';
import Routes from './navigation/routes';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDarkTheme, CombinedLightTheme} from './utils/Theme';
import {ThemeContext} from './context/ThemeCotext';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteStackParams} from '../src/definitions/navigationTypes';
import HomeStack from '../src/navigation/HomeStack';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator<RouteStackParams>();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [dark, setDark] = useState(true);
  const theme = dark ? CombinedDarkTheme : CombinedLightTheme;
  const toggleTheme = () => {
    setDark(!dark);
  };

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <PaperProvider theme={theme}>
        <ReduxProvider store={store}>
          <NavigationContainer theme={theme}>
            {user ? (
              <Stack.Navigator
                screenOptions={{headerShown: false, gestureEnabled: false}}>
                <Stack.Screen name="Home" component={HomeStack} />
              </Stack.Navigator>
            ) : (
              <Routes />
            )}
          </NavigationContainer>
        </ReduxProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default App;
