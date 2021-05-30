import React, {useState, useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';

/* utils and files */
import {Text, Divider, Switch} from 'react-native-paper';
import {ThemeContext} from '~context/ThemeCotext';
import {colors, hp} from '~utils';
import {fonts} from '~utils/fonts';
import styles from './styles';

const SettingsBottom = () => {
  const [switchon, setSwitchOn] = useState<boolean>(true);
  const {toggleTheme} = useContext(ThemeContext);

  const onToggleSwitch = () => {
    toggleTheme();
    setSwitchOn(!switchon);
  };
  return (
    <View style={styles.container}>
      <View style={styles.themeContainer}>
        <Text style={[fonts.caption]}>Switch Theme</Text>
        <Switch
          value={switchon}
          onValueChange={onToggleSwitch}
          style={styles.toggle}
          color={colors.PRIMARY}
        />
      </View>
      <TouchableOpacity style={[styles.item]}>
        <Text style={[fonts.caption]}> Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item]}>
        <Text style={[fonts.caption]}> Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item]}>
        <Text style={[fonts.caption]}> Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item]}>
        <Text style={[fonts.caption, {color: colors.WARNING}]}> Logout</Text>
      </TouchableOpacity>
      <Divider style={styles.divide} />
      <TouchableOpacity style={[styles.item, {marginTop: hp(1)}]}>
        <Text
          style={[
            fonts.smallerCaption,
            {color: colors.PRIMARY, fontWeight: 'bold'},
          ]}>
          {' '}
          Version 1.0.0
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsBottom;
