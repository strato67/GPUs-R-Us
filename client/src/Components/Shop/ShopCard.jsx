export default function ShopCard({ product }) {
  return (
    <>
      <div className="card max-w-sm bg-base-100 shadow-xl place-self-center hover:scale-105">
        <figure>
          <img
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/RTX-3080-flat-2-scaled.jpg"
            alt="placeholder"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>

          <p>{product.description}</p>
          <div className="rating rating-sm no-animation cursor-not-allowed">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled={true}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
              disabled={true}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2  bg-orange-400"
              disabled={true}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled={true}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled={true}
            />
          </div>
          <div className="badge badge-secondary p-4 text-xl font-semibold">${product.price}</div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
}
