"use client";

import { useTheme } from "next-themes";
import ThemeSwitch from "./components/ThemeSwitch";

const page = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="p-10">
      <div className="flex items-center space-x-2">
        <h1
          className={`${
            resolvedTheme == "light" ? "text-black" : "text-white"
          } text-2xl font-bold`}
        >
          Mail33
        </h1>
        <ThemeSwitch setTheme={setTheme} resolvedTheme={resolvedTheme} />
      </div>
    </div>
  );
};
export default page;
