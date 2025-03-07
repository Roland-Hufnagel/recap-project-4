import ColorCard from "../ColorCard";

export default function DetailsView({ theme }) {
  return (
    <>
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
