import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text, Button} from 'react-native-paper';
import {sizes} from '../../utils';

const LargeButton = () => {
  return (
    <Button
      mode="contained"
      style={styles.button}
      dark={true}
      labelStyle={[sizes.fonts.buttonText]}>
      Get Started
    </Button>
  );
};

export default LargeButton;
