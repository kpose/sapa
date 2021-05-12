import {StyleSheet, Dimensions} from 'react-native';
import {colors, hp, wp} from '../../utils';
import {heightPercentageToDP} from '../../utils/responsive';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },

  iconContainer: {
    position: 'absolute',
    bottom: hp(2),
    alignSelf: 'center',
  },
  icon: {
    color: 'white',
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(50),
    backgroundColor: 'red',
  },
});

export default styles;
