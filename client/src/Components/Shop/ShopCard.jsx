export default function ShopCard({ product }) {
  return (
    <>
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
          <div className="rating rating-sm no-animation cursor-not-allowed py-2">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              disabled={true}
              checked={true}
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
          <div className="badge badge-secondary p-4 text-xl font-semibold">
            ${(Math.round(product.price*100)/100).toFixed(2)}
          </div>
          <div className="card-actions justify-end p-2">
            {product.tags.map((tag,index)=>{
              return(<div className="badge badge-outline" key={index}>{tag}</div>)
            })}

          </div>
        </div>
      </div>
    </>
  );
}
