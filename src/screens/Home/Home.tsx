import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';
import {RouteStackProps} from '../../definitions/navigationTypes';

/* utils and files */
import {HomeHeader, HomeWallet} from '../../components';

const Home = ({navigation}: RouteStackProps) => {
  return (
    <View style={{flex: 1}}>
      <HomeWallet />
    </View>
  );
};

export default Home;
