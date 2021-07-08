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

const BottomTabBar = ({state, navigation}: Props) => {
  const {routes} = state;
  const [selected, setSelected] = useState('WalletDetails');

  const animation = useRef(new Animated.Value(0)).current;

  const {showTabBar} = useTabBar();

  /* useEffect(() => {
    showTabBar();
  }, []); */

  /* const showTabBar = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }; */

  const toggleTabBar = () => {
    if (showTabBar) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 100,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    toggleTabBar();
  }, [showTabBar]);

  const renderColor = (currentTab: string) =>
    currentTab === selected ? colors.SECONDARY : colors.DARK_GRAY;

  const handlePress = (activeTab: string, index: number) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[styles.container, {transform: [{translateY: animation}]}]}>
        {routes.map((route: any, index: number) => (
          <Tab
            tab={route}
            key={route.key}
            color={renderColor(route.name)}
            onPress={() => handlePress(route.name, index)}
            icon={route.params.icon}
          />
        ))}
      </Animated.View>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: hp(4),
    width: wp(100),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY,
    justifyContent: 'space-between',
    width: wp(70),
    height: hp(7),
    borderRadius: wp(10),
    elevation: hp(5),

    shadowColor: colors.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
});
