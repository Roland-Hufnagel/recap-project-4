import ColorCard from "../ColorCard";
import "./DetailsView.css";

export default function DetailsView({ theme, onDeleteTheme, onEditTheme }) {
  return (
    <>
      <div className="button-container">
        <button onClick={onEditTheme} className="edit--button">
          Edit
        </button>
        <button
          onClick={() => {
            onDeleteTheme(theme.id);
          }}
          className="delete--button"
        >
          Delete
        </button>
      </div>
      <ul>
        {theme.colors.map((color) => (
          <li key={color.role}>
            <ColorCard color={color} />
          </li>
        ))}
      </ul>
    </>
  );
}
