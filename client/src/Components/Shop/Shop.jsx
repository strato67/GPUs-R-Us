import ShopCard from "./ShopCard";

export default function Shop() {
  return (
    <>
      <div className="min-h-screen bg-base-200">
        <div className="flex flex-col lg:flex-row items-center pt-16 pb-8 lg:py-8 justify-center">
          <div className="lg:pr-12">
            <h1 className="text-5xl font-bold text-center ">Shop</h1>
          </div>
          <div className="pt-5 lg:pt-0">
            <ul className="menu menu-horizontal bg-primary rounded-box ">
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
        </div>

        <div className="grid lg:grid-cols-3 min-h-screen bg-base-200 place-content-center place-items-center gap-8 pb-8">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </>
  );
}
