import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Price() {
  const { symbol } = useParams();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch(`https://api.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=cle1::twvnr-1746484441620-68c220ac8e36`)
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
