import React, {createContext} from 'react';

interface Props {
  type: string;
}

export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});
