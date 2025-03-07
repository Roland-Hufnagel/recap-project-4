import "./colorCard.css";

export default function ColorCard({ color }) {
  return (
    <div className="card" style={{ backgroundColor: color.value }}>
      <div className="card-info">
        <span className="card-color__role">{color.role}</span>
        <span className="card-color__value">{color.value}</span>
      </div>
    </div>
  );
}
