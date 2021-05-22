import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  username: {
    marginTop: hp(2),
    marginBottom: hp(4),
    marginLeft: wp(3),
  },
  caption: {
    marginBottom: hp(0.5),
    color: colors.LIGHT_GRAY,
  },
  first: {
    marginTop: hp(2),
    marginLeft: wp(3),
  },
  title: {
    marginLeft: wp(3),
    color: colors.LIGHT_GRAY,
  },
  divide: {
    height: hp(0.3),
    marginTop: hp(1),
    marginBottom: hp(2),
  },
});

export default styles;
