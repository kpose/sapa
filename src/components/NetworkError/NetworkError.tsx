import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {colors, hp} from '~utils';
import {fonts} from '~utils/fonts';

const NetworkError = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, fonts.caption]}>
        Oops! Looks like your device is not connected to the internet
      </Text>
    </SafeAreaView>
  );
};

export default NetworkError;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: colors.WARNING,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
});
