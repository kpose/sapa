module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-responsive-fontsize|react-native-iphone-x-helper|react-native-vector-icons|react-native-calendars|react-native-swipe-gestures)/)',
  ],
};
