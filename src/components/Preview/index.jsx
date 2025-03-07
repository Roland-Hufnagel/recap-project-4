import "./Preview.css";

export default function Preview({ theme }) {
  return (
    <>
      <ul>
        {theme.colors.map((color) => (
          <li
            key={color.name}
            className="preview-color"
            style={{ backgroundColor: color.value }}
          ></li>
        ))}
      </ul>
    </>
  );
}
