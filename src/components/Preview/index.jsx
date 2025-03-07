import "./Preview.css";

export default function Preview({ theme }) {
  return (
    <>
      <ul>
        {theme.colors.map((color, index) => (
          <li
            key={index}
            className="preview-color"
            style={{ backgroundColor: color.value }}
          ></li>
        ))}
      </ul>
    </>
  );
}
