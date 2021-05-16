import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';

import {Welcome} from './screens';

const lighttheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2A9D8F',
    accent: '#f1c40f',
  },
};

const darktheme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    surface: '#000',
    primary: '#2A9D8F',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <PaperProvider theme={darktheme}>
      <ReduxProvider store={store}>
        <View style={styles.container}>
          <Welcome />
        </View>
      </ReduxProvider>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
