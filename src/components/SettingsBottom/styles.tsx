import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
  },
  divide: {
    height: hp(1),
  },
  item: {
    marginBottom: hp(2),
    marginLeft: wp(3),
  },
  themeContainer: {
    flexDirection: 'row',
    marginBottom: hp(1),
    marginLeft: wp(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggle: {
    marginRight: wp(3),
  },
});

export default styles;
