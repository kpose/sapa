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
    alignItems: 'center',
  },
  delete: {
    color: colors.WARNING,
    fontWeight: 'bold',
  },

  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp(3),
    marginTop: hp(0.5),
    marginBottom: hp(2.5),
  },
  icon: {
    marginRight: wp(5),
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
