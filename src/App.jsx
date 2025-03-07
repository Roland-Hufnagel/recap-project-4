import { useState } from "react";
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
    const themeToAdd = { colors: [], id: uid(), name: newTheme.name };
    const colors = Object.entries(newTheme).slice(1);
    colors.forEach((color) => {
      themeToAdd.colors.push({ role: color[0], value: color[1] });
    });
    setThemes([themeToAdd, ...themes]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ThemeForm onAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <Theme theme={theme} key={theme.id} onDeleteTheme={handleDeleteTheme} />
      ))}
    </>
  );
}

export default App;
