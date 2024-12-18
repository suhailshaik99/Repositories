import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export default function GrandChildComponent() {
  const { mode } = useContext(themeContext);
  return (
    <div>
      <h1>This is a GrandChildComponent</h1>
      <p>Theme mode: {mode}</p>
    </div>
  );
}
