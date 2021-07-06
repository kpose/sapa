import {StyleSheet} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    width: wp(75),
    height: hp(17),
    alignSelf: 'center',
    borderRadius: wp(5),
    marginTop: hp(10),
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  divider: {
    marginTop: hp(2),
    height: hp(0.2),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(1),
  },
});

export default styles;
