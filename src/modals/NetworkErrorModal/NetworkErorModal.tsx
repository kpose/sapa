import React from 'react';
import {Surface, Text} from 'react-native-paper';
import styles from './styles';

const NetworkErorModal = () => {
  return (
    <Surface style={styles.container}>
      <Text style={styles.text}>
        Oops! Looks like your device lost connection to the internet, please
        stay connected.
      </Text>
    </Surface>
  );
};

export default NetworkErorModal;
