import React, {createContext} from 'react';

export interface ContextProps {
  theme: {};
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps | null>(null);
