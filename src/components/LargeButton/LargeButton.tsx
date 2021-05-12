import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text, Button} from 'react-native-paper';
import {sizes} from '../../utils';

type ButtonProps = {
  title: string;
  onPress: any;
};

const LargeButton = (props: ButtonProps) => {
  return (
    <Button
      onPress={props.onPress}
      mode="contained"
      style={styles.button}
      dark={true}
      labelStyle={[sizes.fonts.buttonText]}>
      {props.title}
    </Button>
  );
};

export default LargeButton;
