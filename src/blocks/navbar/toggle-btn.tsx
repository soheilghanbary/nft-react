import { useTheme } from "hooks/use-theme";

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="flex items-center p-2 justify-center bg-primary border-2 shadow-md rounded-full border-line active:scale-90 duration-150"
      onClick={toggleTheme}
    >
      <span className="material-symbols-rounded">
        {theme === "dark" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}
