import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(5),
    marginLeft: wp(3),
    marginTop: hp(1),
    marginBottom: hp(1),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: wp(4),
    alignSelf: 'center',
  },
  rightIcon: {
    marginRight: wp(4),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
