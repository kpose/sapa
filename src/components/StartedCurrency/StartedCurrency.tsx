import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import {CurrencyPicker} from '~modals';
import {colors, sizes} from '~utils';

import {useAppSelector, useAppDispatch} from '~redux/reduxhooks';

type startedProps = {
  onButtonPress: any;
  onBackPress: any;
};

const StartedCurrency = (props: startedProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const currency = useAppSelector(state => state.user.currency);

  return (
    <View style={styles.container}>
      {showPicker && <CurrencyPicker onClose={() => setShowPicker(false)} />}

      <View style={[styles.captionContainer, showPicker && {opacity: 0}]}>
        <Text style={[styles.caption, sizes.fonts.bodyText]}>
          Choose your currency.
        </Text>

        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <View style={styles.contain}>
            <View style={styles.currencyContainer}>
              <MaterialCommunityIcons
                name="apple-keyboard-control"
                size={sizes.regularIconSize}
                style={{color: colors.WHITE}}
              />
              <Text style={[sizes.fonts.caption, styles.currency]}>
                {currency}
              </Text>
            </View>

            <AntDesign
              name="right"
              style={styles.rightIcon}
              size={sizes.regularIconSize}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.divide} />
      </View>

      <View style={styles.buttonContainer}>
        <LargeButton
          title="Next"
          onPress={props.onButtonPress}
          disabled={showPicker && true}
        />

        <TouchableOpacity
          style={styles.loginContainer}
          onPress={props.onBackPress}
          disabled={showPicker && true}>
          <Text style={[sizes.fonts.caption, styles.idtext]}>Go Back</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity
        style={styles.loginContainer}
        onPress={props.onBackPress}
        disabled={showPicker && true}>
        <Text style={[sizes.fonts.caption, styles.idtext]}>Go Back</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default StartedCurrency;
