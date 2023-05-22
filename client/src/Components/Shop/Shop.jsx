import ShopCard from "./ShopCard";

export default function Shop() {
  return (
    <>
      <div className="min-h-screen bg-base-200">
        <div className="flex flex-col lg:flex-row justify-center py-5">
          <h1 className="text-5xl font-bold text-center ">Shop</h1>
          <ul className="menu menu-horizontal bg-base-100 rounded-box ">
            <li>
              <a>All Products</a>
            </li>
            <li>
              <a>AMD</a>
            </li>
            <li>
              <a>NVIDIA</a>
            </li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-3 min-h-screen bg-base-200 place-content-center place-items-center gap-2 p">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </>
  );
}
