import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-paper';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import {sizes} from '../../utils';

type startedProps = {
  onStartedPress: any;
  onLoginPress: any;
};

const Started = (props: startedProps) => {
  return (
    <View>
      <View style={styles.captionContainer}>
        <Text style={[styles.caption, sizes.fonts.bodyText]}>
          Keep track of your expenses for FREE.
        </Text>
        <FontAwesome
          name="hand-peace-o"
          size={sizes.navigationIconSize}
          style={styles.wave}
        />
      </View>

      <View style={styles.buttonContainer}>
        <LargeButton title="Get Started" onPress={props.onStartedPress} />
      </View>

      <View style={styles.loginContainer}>
        <Text style={[sizes.fonts.caption, styles.idtext]}>
          Have a user ID?
        </Text>
        <TouchableOpacity onPress={props.onLoginPress}>
          <Text style={[sizes.fonts.caption]}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Started;
