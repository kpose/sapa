import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Text} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import {hp, wp} from '~utils';

const EmptyAnime = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottieanimation/empty.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={[fonts.bodyText, styles.empty]}>It's empty here!</Text>
      <Text style={[fonts.smallerCaption]}>
        Tap on the + button to add your expense.
      </Text>
    </View>
  );
};

export default EmptyAnime;

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
