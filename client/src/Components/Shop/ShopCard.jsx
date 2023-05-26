export default function ShopCard({ product }) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl place-self-center hover:scale-105">
        <figure>
          <img
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/RTX-3080-flat-2-scaled.jpg"
            alt="placeholder"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge badge-secondary">${product.price}</div>
          </h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
}
