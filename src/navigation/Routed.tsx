import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {authMiddleWare} from '~utils';

const Routed = () => {
  return (
    <View>
      <Text style={{color: 'white'}}> hello</Text>
    </View>
  );
};

export default Routed;
