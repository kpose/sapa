import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

import {DarkTheme} from 'react-native-paper';

const lighttheme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#2A9D8F',
    accent: '#f1c40f',
  },
};

const styles = StyleSheet.create({
  container: {
    height: hp(50),
    width: wp(90),
    alignSelf: 'center',
    borderRadius: 10,
    //flexWrap: 'wrap',
    backgroundColor: lighttheme.colors.surface,
  },
  indicator: {
    alignItems: 'center',
  },

  cancelIcon: {
    margin: wp(2),
    color: colors.PRIMARY,
  },
  picker: {
    flexDirection: 'row',
    marginLeft: wp(2),
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divide: {
    marginLeft: wp(2),
    marginTop: hp(1),
    marginRight: wp(2),
  },
  name: {
    marginRight: wp(2),
  },
  searchContainer: {
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },
  search: {
    width: wp(77),
    height: hp(4),
  },
});

export default styles;
