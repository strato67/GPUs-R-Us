export default function ShopCard() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl place-self-center">
        <figure>
          <img
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/RTX-3080-flat-2-scaled.jpg"
            alt="placeholder"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
}
