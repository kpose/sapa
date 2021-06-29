import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  container: {
    height: hp(37),
    width: wp(95),
    borderRadius: wp(5),
  },
  header: {
    alignSelf: 'center',
    marginTop: hp(1),
    marginBottom: hp(1),
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(10),
    marginRight: wp(10),
    marginTop: hp(1),
  },
  cancel: {
    color: colors.PRIMARY,
  },
  divider: {
    height: wp(1),
  },
});

export default styles;
