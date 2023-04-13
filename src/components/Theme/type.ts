// Create typing for React Context for themes
export type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: (newTheme: ThemeType) => void;
  toggleTheme: () => void;
};
