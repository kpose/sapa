import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(3),
    marginRight: wp(3),
    marginTop: hp(2),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  wallet: {
    marginLeft: wp(50),
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  input: {
    width: wp(80),
    marginLeft: wp(4),
  },
  cameraContainer: {
    height: hp(8),
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(5),
    borderWidth: hp(0.2),
    borderStartColor: colors.PRIMARY,
    borderBottomColor: colors.PRIMARY,
    borderEndColor: colors.SECONDARY,
    borderTopColor: colors.SECONDARY,
  },
});

export default styles;
