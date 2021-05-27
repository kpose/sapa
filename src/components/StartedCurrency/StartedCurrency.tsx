import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button, Portal, Modal} from 'react-native-paper';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import {CurrencyPicker} from '~modals';
//import CurrencyPicker from '../CurrencyPicker/CurrencyPicker';
import {colors, sizes} from '~utils';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~redux/store';

type startedProps = {
  onButtonPress: any;
  onBackPress: any;
};

const StartedCurrency = (props: startedProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const {currency} = useSelector((state: RootState) => state.userData);

  return (
    <View>
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
      </View>

      <TouchableOpacity
        style={styles.loginContainer}
        onPress={props.onBackPress}
        disabled={showPicker && true}>
        <Text style={[sizes.fonts.caption, styles.idtext]}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartedCurrency;
