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
    backgroundColor: 'transparent',
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
  modalStyle: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },

  deleteContainer: {
    marginTop: hp(5),
    alignItems: 'center',
  },
  delete: {
    color: colors.WARNING,
    fontWeight: 'bold',
  },
  datePicker: {
    marginTop: hp(10),
  },
});

export default styles;
