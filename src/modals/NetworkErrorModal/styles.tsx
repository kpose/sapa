import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: colors.WARNING,
    height: hp(6),
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
