import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => ({});

  return Reanimated;
});

//jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

/* jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest.fn(),
})); */
jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));
jest.mock('@react-native-community/masked-view', () => ({}));

/* jest.mock('@react-native-firebase/firestore', () => ({}));

jest.mock('@react-native-firebase/storage', () => ({}));

jest.mock('@react-native-firebase/auth', () => ({}));
 */
