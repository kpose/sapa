import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(1),
    marginBottom: hp(1),
    height: hp(12),
    borderRadius: wp(2),
    alignItems: 'center',
    shadowColor: colors.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  imageContainer: {
    backgroundColor: colors.LIGHT_GRAY,
    width: wp(20),
    borderRadius: wp(2),
    height: hp(10),
    marginLeft: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: wp(20),
    borderRadius: wp(2),
    height: hp(10),
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginLeft: wp(5),
    justifyContent: 'space-evenly',
  },
  amount: {
    fontWeight: 'bold',
  },
  category: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: wp(0.7),
    borderRadius: 10,
    marginTop: hp(0.5),
    marginBottom: hp(0.5),
  },
  note: {
    marginBottom: wp(1),
  },
  categoryText: {
    //fontWeight: 'bold',
    marginLeft: wp(1),
    marginRight: wp(1),
  },
  noImage: {
    width: wp(20),
    height: hp(10),
    borderRadius: wp(2),
    resizeMode: 'cover',
  },
});

export default styles;
