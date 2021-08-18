import React, {useState} from 'react';
import styles from './styles';
import {Text, Button, ActivityIndicator} from 'react-native-paper';
import {colors, sizes} from '~utils';

type ButtonProps = {
  title: string;
  onPress: any;
  disabled?: boolean;
  color?: string;
  testID?: string;
  loading?: boolean;
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
      labelStyle={[sizes.fonts.bigButtonText]}>
      {props.loading ? (
        <ActivityIndicator animating={true} color={colors.WHITE} />
      ) : (
        props.title
      )}
    </Button>
  );
};

export default LargeButton;
