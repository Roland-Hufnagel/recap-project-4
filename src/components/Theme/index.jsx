import { useState } from "react";
import DetailsView from "../DetailsView";
import Preview from "../Preview";
import "./Theme.css";
import ThemeForm from "../ThemeForm";

export default function Theme({ theme, onDeleteTheme, onEditTheme }) {
  //const [detailsView, setDetailsView] = useState(false);
  const [displayMode, setDisplayMode] = useState("preview");

  function setViewToDetail() {
    setDisplayMode("detail");
  }
  function setViewToPreview() {
    setDisplayMode("preview");
  }
  function setViewToEdit() {
    setDisplayMode("edit");
  }
  return (
    <article className="theme">
      <div className="theme-title">
        <h2>{theme.name}</h2>
        <button
          onClick={
            displayMode === "preview" ? setViewToDetail : setViewToPreview
          }
        >
          {displayMode === "preview" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </button>
      </div>
      {displayMode === "detail" && (
        <DetailsView
          theme={theme}
          onDeleteTheme={onDeleteTheme}
          onEditTheme={setViewToEdit}
        />
      )}
      {displayMode === "preview" && <Preview theme={theme} />}
      {displayMode === "edit" && (
        <ThemeForm
          initialTheme={theme}
          isEditMode
          onSubmit={(newTheme) => {
            newTheme.id = theme.id;
            onEditTheme(newTheme);
            setDisplayMode("preview");
          }}
        />
      )}
    </article>
  );
}
