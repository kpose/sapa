import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    width: wp(80),
    //height: hp(17),
    alignSelf: 'center',
    borderRadius: wp(5),
    //marginTop: hp(10),
    paddingBottom: hp(1),
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: hp(2),
    color: colors.WARNING,
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
