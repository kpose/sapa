import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Surface} from 'react-native-paper';
import {useTabBar} from '~context/TabBarProvider';
import {colors, hp, wp} from '~utils';
import Tab from './Tab';

interface Props {
  state: any;
  navigation: any;
}

const TopTabBar = ({state, navigation}: Props) => {
  const {routes} = state;
  const [selected, setSelected] = useState('Expense');

  const renderColor = (currentTab: string) =>
    currentTab === selected ? colors.SECONDARY : colors.SEMI_TRANSPARENT;

  const handlePress = (activeTab: string, index: number) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Surface style={[styles.container]}>
        {routes.map((route: any, index: number) => (
          <Tab
            tab={route}
            key={route.key}
            color={renderColor(route.name)}
            onPress={() => handlePress(route.name, index)}
          />
        ))}
      </Surface>
    </View>
  );
};

export default TopTabBar;

const styles = StyleSheet.create({
  wrapper: {
    width: wp(100),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY,
    justifyContent: 'space-between',
    width: wp(50),
    height: hp(5),
    borderRadius: wp(10),
  },
});
