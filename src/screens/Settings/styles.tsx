import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  surface: {
    height: hp(7),
    justifyContent: 'center',
  },
  username: {
    marginLeft: wp(3),
    marginBottom: hp(0.5),
  },
  user: {
    marginLeft: wp(3),
    color: colors.PRIMARY,
  },
  divide: {
    height: hp(4),
  },
});

export default styles;
