import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(3),
    marginTop: hp(1),
  },
  divide: {
    marginTop: hp(7),
  },
  deleteContainer: {
    marginTop: hp(7),
  },
  delete: {
    alignSelf: 'center',
    color: colors.WARNING,
  },
});

export default styles;
