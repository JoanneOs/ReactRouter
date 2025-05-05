import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/currencies">Currencies</Link>
      <Link to="/price">Price</Link>
    </div>
  );
}
