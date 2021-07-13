import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Text} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import {hp, wp} from '~utils';

const ChartAnime = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottieanimation/financeempty.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={[fonts.bodyText, styles.empty]}>This wallet is empty!</Text>
      <Text style={[fonts.smallerCaption]}>
        We are waiting for transactions to be added.
      </Text>
    </View>
  );
};

export default ChartAnime;

const styles = StyleSheet.create({
  empty: {
    fontWeight: 'bold',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  animation: {
    height: hp(40),
    alignSelf: 'center',
  },
});
