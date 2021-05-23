import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(3),
    // marginTop: hp(1),
  },
  currency: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(5),
  },
  id: {
    marginBottom: hp(1),
    marginTop: hp(1),
  },
  name: {
    marginLeft: wp(2),
    color: colors.LIGHT_GRAY,
  },
  divide: {
    height: hp(0.3),
    marginRight: wp(3),
  },
});

export default styles;
