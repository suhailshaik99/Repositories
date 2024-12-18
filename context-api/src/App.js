import ThemeProvider from "./contexts/ThemeProvider";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <ThemeProvider>
      <ParentComponent />
    </ThemeProvider>
  );
}

export default App;
