import React, {createContext, useContext} from 'react';

export interface Props {
  theme: {};
  toggleTheme: () => void;
}

export const ThemeContext = createContext<Props>({
  theme: {},
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
