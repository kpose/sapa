import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import {Text} from 'react-native-paper';

import {Welcome} from './screens';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <PaperProvider theme={DarkTheme}>
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
