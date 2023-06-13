import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ItemCarousel from "./ItemCarousel";
import Loading from "../Other/Loading";
import Comments from "./CommentTab/Comments";
import useAuthContext from "../../Hooks/useAuthContext";

export default function ItemPage() {
  const [itemInfo, setItemInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const getItemInfo = async () => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    if (!response.ok) {
      navigate("/404");
    }
    setItemInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    getItemInfo();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {itemInfo && (
        <div className=" bg-base-200">
          <div className="flex flex-col md:flex-row pb-4 px-4 lg:space-x-6 justify-center md:py-12  ">
            <div className="py-8 md:py-12 h-fit md:hidden">
              <h1 className="text-3xl ">{itemInfo.product.name}</h1>
            </div>

            <ItemCarousel />

            <div className="flex flex-col justify-center w-fit md:px-4 lg:w-96 md:py-8">
              <h1 className="text-3xl hidden md:inline">
                {itemInfo.product.name}
              </h1>
              <div className="badge badge-secondary py-6 px-4 my-4 text-3xl font-semibold mb-4">
                ${(Math.round(itemInfo.product.price * 100) / 100).toFixed(2)}
              </div>
              <h2 className="text-xl font-bold">Overview</h2>
              <p className="py-4">{itemInfo.product.description}</p>
              {user ? (
                <div className="flex justify-center w-full ">
                  <button className="btn btn-primary w-1/2 mx-1 ">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <a className="pl-2">Buy</a>
                  </button>
                  <button className="btn btn-secondary w-1/2 ">
                    Add to Wishlist
                  </button>
                </div>
              ) : (
                <div className="flex justify-center w-full ">
                  <Link to="/login" className="btn btn-primary w-full">Login to Purchase</Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col pb-4 px-4 items-center w-full">
            <div className="join join-vertical w-full lg:w-3/5">
              <details className="collapse bg-base-200 collapse-plus shadow-xl">
                <summary className="collapse-title text-xl font-bold bg-primary text-primary-content">
                  Specifications
                </summary>
                <div className="collapse-content">
                  <div className="card w-full bg-base-200 ">
                    <div className="card-body">
                      {itemInfo.product.specs.map((spec, index) => {
                        return (
                          <div key={index}>
                            <h2 className="card-title">{spec.name}</h2>
                            <ul className="list-disc">
                              <li>{spec.spec}</li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </details>
              <details className="collapse bg-base-200 collapse-plus shadow-xl">
                <summary className="collapse-title text-xl font-bold bg-primary text-primary-content">
                  Reviews
                </summary>
                <div className="collapse-content">
                  <Comments />
                </div>
              </details>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
