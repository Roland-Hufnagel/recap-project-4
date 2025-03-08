import { useEffect, useState } from "react";
import "./colorCard.css";

export default function ColorCard({ color }) {
  const [colorName, setColorName] = useState("");
  useEffect(() => {
    async function fetchColorName() {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${color.value.slice(1)}`
      );
      const data = await response.json();
      setColorName(data.name.value);
    }
    fetchColorName();
  }, []);
  return (
    <div className="card" style={{ backgroundColor: color.value }}>
      <div className="card-info">
        <span className="card-color__role">{color.role}</span>
        <br />
        <span className="card-color__value">{colorName}</span>
        <br />
        <span className="card-color__value">{color.value}</span>
      </div>
    </div>
  );
}
