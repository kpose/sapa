import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Pressable,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
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
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateMounting();
  }, []);

  const animateMounting = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.container, {opacity: animation}]}>
      {showPicker && <CurrencyPicker onClose={() => setShowPicker(false)} />}

      <Pressable style={[styles.captionContainer, showPicker && {opacity: 0}]}>
        <Text style={[styles.caption, sizes.fonts.body]}>
          Choose your currency.
        </Text>

        <Pressable onPress={() => setShowPicker(true)}>
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
        </Pressable>

        <View style={styles.divide} />
      </Pressable>

      <View style={styles.buttonContainer}>
        <LargeButton
          title="Next"
          onPress={props.onButtonPress}
          disabled={showPicker && true}
        />

        <Pressable
          style={styles.loginContainer}
          onPress={props.onBackPress}
          disabled={showPicker && true}>
          <Text style={[sizes.fonts.caption, styles.idtext]}>Go Back</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default StartedCurrency;
