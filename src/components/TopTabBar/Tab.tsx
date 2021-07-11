import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {wp} from '~utils';
import {Text} from 'react-native-paper';
import {fonts} from '~utils/fonts';

interface Props {
  tab: any;
  color: any;
  onPress: any;
}

const Tab = ({tab, color, onPress}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={[fonts.caption, styles.text, {color}]}>{tab.name}</Text>
    </Pressable>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(2),
  },
  text: {
    fontWeight: 'bold',
  },
});
