import { useContext } from "react";
import ChildrenComponent from "./ChildrenComponent";
import { themeContext } from "../contexts/ThemeContext";

export default function ParentComponent() {
  const { mode, setMode } = useContext(themeContext);

  function handleToggle(e) {
    e.preventDefault();
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <div>
      <h1>This is a parent component</h1>
      <p>Theme Mode: {mode} </p>
      <button type="button" onClick={handleToggle}>
        Toggle Mode
      </button>
      <ChildrenComponent />
    </div>
  );
}
