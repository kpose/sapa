import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-paper';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import {colors, sizes} from '../../utils';

type startedProps = {
  onButtonPress: any;
  onBackPress: any;
};

const StartedCurrency = (props: startedProps) => {
  return (
    <View>
      <View style={styles.captionContainer}>
        <Text style={[styles.caption, sizes.fonts.bodyText]}>
          Choose your currency.
        </Text>
        <TouchableOpacity
          style={styles.currencyContainer}
          onPress={() => console.log('ooooooo')}>
          <MaterialCommunityIcons
            name="apple-keyboard-control"
            size={sizes.regularIconSize}
            style={{color: colors.WHITE}}
          />
          <Text style={[sizes.fonts.caption, styles.currency]}>
            {' '}
            Nigerian Naira
          </Text>
          <AntDesign
            name="right"
            style={styles.rightIcon}
            size={sizes.regularIconSize}
          />
        </TouchableOpacity>
        <View style={styles.divide} />
      </View>

      <View style={styles.buttonContainer}>
        <LargeButton title="Next" onPress={props.onButtonPress} />
      </View>

      <TouchableOpacity
        style={styles.loginContainer}
        onPress={props.onBackPress}>
        <Text style={[sizes.fonts.caption, styles.idtext]}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartedCurrency;
