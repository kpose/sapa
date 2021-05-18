import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
} from 'react-native-paper';

const CombinedLightTheme = {
  ...NavigationLightTheme,
  ...PaperLightTheme,
  roundness: 2,
  colors: {
    ...NavigationLightTheme.colors,
    ...PaperLightTheme.colors,
    primary: '#2A9D8F',
    accent: '#f1c40f',
  },
};

const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  roundness: 2,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    surface: '#000',
    primary: '#2A9D8F',
    accent: '#f1c40f',
  },
};

export {CombinedDarkTheme, CombinedLightTheme};
