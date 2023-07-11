export default function CartCard() {
  return (
    <>
      <div className="indicator w-full place-self-center">
        <span className="indicator-item  badge badge-secondary text-2xl py-6 px-5 m-3 font-bold">0</span>
        <div className="card lg:card-side bg-base-100 shadow-xl w-full place-self-center">
          <figure className="md:max-w-sm  place-self-center">
            <img
              src="https://c1.neweggimages.com/ProductImage/14-137-676-V08.jpg"
              alt="placeholder"
            />
          </figure>
          <div className="card-body pr-10">
            <h2 className="card-title text-3xl">Product Name</h2>
            <div className="badge badge-secondary py-6 px-4 my-4 text-2xl font-semibold mb-4">
              $69.99
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-primary">Add</button>
              <button className="btn btn-outline btn-error">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
