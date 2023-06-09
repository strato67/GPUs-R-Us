import { useState, useEffect } from "react";
import Loading from "../Other/Loading";
import ShopCard from "./ShopCard";

export default function Shop() {
  const [products, setProducts] = useState(null);
  const [active, setActive] = useState("All Products");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const tabContents = ["All Products", "AMD", "NVIDIA", "Other"];

  const getProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    if (!response.ok) {
      setError({ error: "Could not load products." });
    }
    setError(null);
    setLoading(false);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProducts = () => {
    if (active === "All Products") {
      return products;
    }
    const filtered = products.filter((product) =>
      product.tags.includes(active)
    );

    if (filtered.length === 0) {
      setError({ error: "No products found." });
    }
    return filtered;
  };

  return (
    <>
      <div className="min-h-screen bg-base-200">
      {loading && <Loading />}
        <div className="flex flex-col lg:flex-row items-center pt-16 pb-8 lg:py-8 justify-center">
          
          <div className="lg:pr-2">
            <h1 className="text-5xl font-bold text-center ">Shop</h1>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="pt-5 lg:pt-0">
            <ul className="menu menu-horizontal rounded-box active">
              {tabContents.map((key) => (
                <li
                  key={key}
                  onClick={() => {
                    setActive(key);
                    setError(false);
                  }}
                >
                  <a className={`${active == key ? "active" : ""}`}>{key}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {products && !error && (
          <div className="grid lg:grid-cols-3 bg-base-200 gap-8 pb-8 px-8">
            {filterProducts().map((product, index) => {
              return <ShopCard product={product} key={index} />;
            })}
          </div>
        )}
        {error && (
          <div className="flex flex-col items-center ">
            <div className="max-w-md text-center">
              <h1 className="text-3xl font-bold">Error</h1>
              <h2 className="text-lg font-bold py-2">{error.error}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
