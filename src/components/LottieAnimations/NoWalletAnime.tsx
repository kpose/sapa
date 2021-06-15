import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Text} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import {hp, wp} from '~utils';

const EmptyAnime = () => {
  return (
    <LottieView
      source={require('../../assets/lottieanimation/payment.json')}
      autoPlay
      loop
      //style={styles.animation}
    />
  );
};

export default EmptyAnime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  animation: {
    height: hp(40),
    width: 20,
    alignSelf: 'center',
  },
});
