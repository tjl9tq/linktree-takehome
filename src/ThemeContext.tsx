import React, { createContext, useState, ReactNode, useEffect } from "react";

interface Theme {
  link: {
    color: string;
    hover: string;
    roundness: string;
    font: string;
  };
  background: {
    color: string;
  };
  [key: string]: Record<string, string>;
}

const defaultTheme: Theme = {
  link: {
    color: "bg-blue-500",
    hover: "hover:!opacity-[0.8]",
    roundness: "rounded-none",
    font: "sans",
  },
  background: {
    color: "bg-blue-300",
  },
};

interface SetThemePropertyArgs {
  component: string;
  property: string;
  value: string;
}

export const ThemeContext = createContext<{
  theme: Theme;
  setThemeProperty: (args: SetThemePropertyArgs) => void;
  getComponentStyles: (component: string) => Record<string, string> | void;
}>({
  theme: defaultTheme,
  setThemeProperty: () => {},
  getComponentStyles: () => {},
});

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [loading, setLoading] = useState(false);

  const setThemeProperty = ({
    component,
    property,
    value,
  }: {
    component: string;
    property: string;
    value: string;
  }) => {
    setLoading(true);
    setTheme((prev) => ({
      ...prev,
      [component]: {
        ...prev[component],
        [property]: value,
      },
    }));
  };

  useEffect(() => {
    if (loading) setLoading(false);
  }, [theme, loading]);

  const getComponentStyles = (component: string) => {
    // TODO: Maybe cache and return previous value to prevent any flickering when nothing is returned
    if (!loading) return theme[component];
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setThemeProperty, getComponentStyles }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider };
