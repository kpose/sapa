import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text, Button} from 'react-native-paper';
import {sizes} from '~utils';

type ButtonProps = {
  title: string;
  onPress: any;
  disabled?: boolean;
  color?: string;
  testID?: string;
};

const LargeButton = (props: ButtonProps) => {
  return (
    <Button
      testID={props.testID}
      uppercase={false}
      onPress={props.onPress}
      color={props.color}
      mode="contained"
      disabled={props.disabled}
      style={styles.button}
      dark={true}
      labelStyle={[sizes.fonts.buttonText]}>
      {props.title}
    </Button>
  );
};

export default LargeButton;
