import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Price() {
  const { symbol } = useParams();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch(`https://api.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=YOUR_API_KEY`)
      .then((response) => response.json())
      .then((data) => setPrice(data));
  }, [symbol]);

  return (
    <div>
      <h2>{symbol} to USD</h2>
      {price ? <p>{price.rate}</p> : <p>Loading...</p>}
    </div>
  );
}
