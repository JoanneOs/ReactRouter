import { Link } from "react-router-dom";

export default function Currencies() {
  const coins = ["BTC", "ETH", "LTC"];
  return (
    <div>
      <h2>Select a Cryptocurrency</h2>
      <ul>
        {coins.map((coin) => (
          <li key={coin}>
            <Link to={`/price/${coin}`}>{coin}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
