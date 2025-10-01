import { createContext, useState, ReactNode, useMemo } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  tema: Theme;
  alternarTema: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps { children: ReactNode; }

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [tema, setTema] = useState<Theme>("light");

  const alternarTema = () => setTema(prev => prev === "light" ? "dark" : "light");

  const value = useMemo(() => ({ tema, alternarTema }), [tema]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
