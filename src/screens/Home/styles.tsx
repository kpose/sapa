import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  /* container: {
    //flex: 1,
    height: hp(25),
    backgroundColor: colors.PRIMARY,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 200,
  }, */

  container: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    //top: hp(4.3),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  walletsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addWallet: {
    borderRadius: wp(5),
    backgroundColor: colors.SECONDARY,
  },
  edit: {
    fontWeight: 'bold',
  },
  modal: {
    height: hp(29),
    width: wp(90),
    backgroundColor: colors.DARK_GRAY,
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'flex-start',
    top: hp(7),
    borderRadius: wp(5),
  },
});

export default styles;
