import { Link } from "react-router-dom";
import { Rating } from "primereact/rating";

export default function ShopCard({ product }) {
  return (
    <>
      <Link to={`/shop/${product._id}`}>
        <div className="card max-w-sm bg-base-100 shadow-xl place-self-center hover:scale-105">
          <figure>
            <img
              src="https://c1.neweggimages.com/ProductImage/14-137-676-V08.jpg"
              alt="placeholder"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{product.name}</h2>

            <p className="truncate">{product.description}</p>
            <div className="flex flex-row items-baseline py-5">
              <div className="w-1 -rotate-90 relative">
                <Rating
                  value={product.rating}
                  readOnly
                  cancel={false}
                  className="w-1 rotate-270 absolute   md:top-0"
                />
                <p className="rotate-90 -right-3 absolute top-20 md:top-20">{`(${product.rating})`}</p>
              </div>
            </div>
            <div className="badge badge-secondary p-4 text-xl font-semibold">
              ${(Math.round(product.price * 100) / 100).toFixed(2)}
            </div>
            <div className="card-actions justify-end p-2">
              {product.tags.map((tag, index) => {
                return (
                  <div className="badge badge-outline" key={index}>
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
