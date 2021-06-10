import {StyleSheet} from 'react-native';
import {colors, wp} from '~utils';

const styles = StyleSheet.create({
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
