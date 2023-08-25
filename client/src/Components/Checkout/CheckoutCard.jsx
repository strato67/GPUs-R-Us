import { useState, useEffect } from "react";

export default function CheckoutCard({ itemNum, item }) {
  const [itemInfo, setItemInfo] = useState(null);
  const { product, quantity } = item;

  const getItemInfo = async () => {
    const response = await fetch(`/api/products/${product}`);
    const data = await response.json();
    if (!response.ok) {
      navigate("/404");
    }
    setItemInfo(data.product);
  };

  useEffect(() => {
    getItemInfo();
  }, []);

  return (
    <>
      {itemInfo && (
        <tr>
          <th>{itemNum}</th>
          <td>{itemInfo.name}</td>
          <td>{quantity}</td>
          <td>{itemInfo.price}</td>
        </tr>
      )}
    </>
  );
}
