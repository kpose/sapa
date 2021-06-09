import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingAnime = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}>hello</Text>
      <LottieView
        source={require('../../assets/lottieanimation/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingAnime;
