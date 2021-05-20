import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: hp(25),
    backgroundColor: colors.PRIMARY,
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  surface: {
    backgroundColor: 'transparent',
    borderWidth: wp(0.3),
    height: hp(8),
    marginTop: hp(1),
    marginLeft: wp(5),
    marginRight: wp(5),
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
  },
  price: {
    marginTop: hp(0.7),
  },
});

export default styles;
