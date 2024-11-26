import { FiSun, FiMoon } from "react-icons/fi";

interface ThemeProps {
  setTheme: (theme: string) => void;
  resolvedTheme: any;
}

export default function ThemeSwitch({ setTheme, resolvedTheme }: ThemeProps) {
  return resolvedTheme === "dark" ? (
    <FiSun className="theme-icon" onClick={() => setTheme("light")} />
  ) : (
    <FiMoon className="theme-icon" onClick={() => setTheme("dark")} />
  );
}
