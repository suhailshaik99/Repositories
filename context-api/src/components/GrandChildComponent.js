import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function GrandChildComponent() {
  const { mode } = useContext(ThemeContext);
  return (
    <div>
      <h1>This is a GrandChildComponent</h1>
      <p>Theme mode: {mode}</p>
    </div>
  );
}
