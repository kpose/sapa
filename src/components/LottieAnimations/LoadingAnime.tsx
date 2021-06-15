import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {hp} from '~utils';

const LoadingAnime = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(20),
      }}>
      <LottieView
        source={require('../../assets/lottieanimation/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingAnime;
