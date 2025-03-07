import { useState } from "react";
import DetailsView from "../DetailsView";
import Preview from "../Preview";
import "./Theme.css";

export default function Theme({ theme }) {
  const [detailsView, setDetailsView] = useState(false);
  function toggleView() {
    setDetailsView(!detailsView);
  }
  return (
    <article className="theme">
      <div className="theme-title">
        <h2>{theme.name}</h2>
        <button onClick={toggleView}>
          {detailsView ? (
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

      {detailsView ? <DetailsView theme={theme} /> : <Preview theme={theme} />}
    </article>
  );
}
