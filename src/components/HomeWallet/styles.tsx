import {StyleSheet} from 'react-native';
import {wp, hp, colors} from '../../utils';

const styles = StyleSheet.create({
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
});

export default styles;
