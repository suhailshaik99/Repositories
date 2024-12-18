import { useState } from "react";
import { themeContext } from "./contexts/ThemeContext";
import ParentComponent from "./components/ParentComponent";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <div className="App">
      <themeContext.Provider value={{ mode, setMode }}>
        <ParentComponent />
      </themeContext.Provider>
    </div>
  );
}

export default App;
