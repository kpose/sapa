import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import {Text} from 'react-native-paper';

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
      <View style={styles.container}>
        <Welcome />
      </View>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
