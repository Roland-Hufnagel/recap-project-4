import ColorCard from "../ColorCard";
import "./DetailsView.css";

export default function DetailsView({ theme, onDeleteTheme }) {
  return (
    <>
      <button
        onClick={() => {
          onDeleteTheme(theme.id);
        }}
        className="delete--button"
      >
        Delete
      </button>
      <ul>
        {theme.colors.map((color) => (
          <li key={color.name}>
            <ColorCard color={color} />
          </li>
        ))}
      </ul>
    </>
  );
}
