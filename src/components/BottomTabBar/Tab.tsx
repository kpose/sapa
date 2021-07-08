import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {wp} from '~utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  tab: any;
  color: any;
  onPress: any;
  icon: string;
}

const Tab = ({tab, color, onPress, icon}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon && <Icon name={icon} color={color} size={26} />}
      {/* <Text style={{color}}>{tab.name}</Text> */}
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
});
