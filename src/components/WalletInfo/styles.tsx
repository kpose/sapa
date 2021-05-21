import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(3),
    marginTop: hp(2),
  },
  details: {
    flexDirection: 'row',
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
