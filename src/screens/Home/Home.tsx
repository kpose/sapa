import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';
import {RouteStackProps} from '../../definitions/navigationTypes';

const Home = ({navigation}: RouteStackProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
