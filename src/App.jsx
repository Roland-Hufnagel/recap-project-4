import "./App.css";
import Theme from "./components/Theme";
import ThemeForm from "./components/ThemeForm";
import { themes as initialThemes } from "./db";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  function handleDeleteTheme(idToDelete) {
    setThemes(themes.filter((theme) => theme.id !== idToDelete));
  }

  function handleAddTheme(newTheme) {
    newTheme.id = uid();
    setThemes([newTheme, ...themes]);
  }

  function handleEditTheme(newTheme) {
    const newThemes = themes.map((theme) => {
      return theme.id === newTheme.id ? newTheme : theme;
    });
    setThemes(newThemes);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ThemeForm onSubmit={handleAddTheme} />
      {themes.map((theme) => (
        <Theme
          theme={theme}
          key={theme.id}
          onDeleteTheme={handleDeleteTheme}
          onEditTheme={handleEditTheme}
        />
      ))}
    </>
  );
}

export default App;
