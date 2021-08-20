import React, {useState, useEffect} from 'react';
import {store, persistor} from './redux/store';
import Routes from './navigation/routes';
import {Provider as ReduxProvider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {CombinedDarkTheme, CombinedLightTheme} from './utils/Theme';
import {ThemeContext} from './context/ThemeCotext';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteStackParams} from './definitions/navigationTypes';
import HomeStack from './navigation/HomeStack';
import auth from '@react-native-firebase/auth';
import {Spinner} from './components';
import {NetworkContext} from './context/NetworkContext';
import TabBarProvider from './context/TabBarProvider';
import NetInfo from '@react-native-community/netinfo';
import {PersistGate} from 'redux-persist/integration/react';
import {Welcome} from '~screens';

enableScreens();

const Stack = createStackNavigator<RouteStackParams>();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isConnected, setIsConnected] = useState(true);
  const [dark, setDark] = useState(false);
  const theme = dark ? CombinedDarkTheme : CombinedLightTheme;

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      if (!(state.isConnected && state.isInternetReachable)) {
        setIsConnected(false);
      } else {
        setIsConnected(true);
      }
    });
    return () => removeNetInfoSubscription();
  }, [isConnected]);

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

  if (initializing) return <Spinner />;

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NetworkContext.Provider value={{isConnected}}>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
              <TabBarProvider>
                <NavigationContainer theme={theme}>
                  {user ? (
                    <Stack.Navigator
                      screenOptions={{
                        headerShown: false,
                        gestureEnabled: false,
                      }}>
                      <Stack.Screen name="Home" component={HomeStack} />
                      <Stack.Screen name="Welcome" component={Welcome} />
                    </Stack.Navigator>
                  ) : (
                    <Routes />
                  )}
                </NavigationContainer>
              </TabBarProvider>
            </ThemeContext.Provider>
          </NetworkContext.Provider>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;

{
  /* <PersistGate loading={<Spinner />} persistor={persistor}>
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
</PersistGate> */
}
