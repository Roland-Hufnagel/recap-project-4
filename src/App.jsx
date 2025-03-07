import "./App.css";
import Theme from "./components/Theme";
import { themes } from "./db";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {themes.map((theme) => (
        <Theme theme={theme} key={theme.id} />
      ))}
    </>
  );
}

export default App;
