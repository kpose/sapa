import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
} from 'react-native-paper';

const CombinedLightTheme = {
  type: 'light',
  ...NavigationLightTheme,
  ...PaperLightTheme,
  roundness: 2,
  colors: {
    ...NavigationLightTheme.colors,
    ...PaperLightTheme.colors,
    primary: '#2A9D8F',
    accent: '#E76F51',
  },
};

const CombinedDarkTheme = {
  type: 'dark',
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  roundness: 2,
  //mode: 'adaptive',
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    surface: '#000',
    primary: '#2A9D8F',
    accent: '#E76F51',
  },
};

export {CombinedDarkTheme, CombinedLightTheme};
