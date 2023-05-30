import { useState, useEffect } from "react";
import ShopCard from "./ShopCard";

export default function Shop() {
  const [products, setProducts] = useState(null);
  const [active, setActive] = useState("All Products");
  const tabContents = ["All Products", "AMD", "NVIDIA", "Other"];

  const getProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    if (!response.ok) {
      console.log("error");
    }
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <div className="flex flex-col lg:flex-row items-center pt-16 pb-8 lg:py-8 justify-center">
          <div className="lg:pr-12">
            <h1 className="text-5xl font-bold text-center ">Shop</h1>
          </div>
          <div className="pt-5 lg:pt-0">
            <ul className="menu menu-horizontal rounded-box active">
              {tabContents.map((key) => (
                <li
                  key={key}
                  onClick={() => {
                    setActive(key);
                    getProducts(tabContents[key]);
                  }}
                >
                  <a className={`${active == key ? "active" : ""}`}>{key}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {products && (
          <div className="grid lg:grid-cols-3 bg-base-200 gap-8 pb-8 px-8">
            {products.map((product, index) => {
              return <ShopCard product={product} key={index} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
