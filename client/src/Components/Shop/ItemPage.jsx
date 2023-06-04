import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ItemCarousel from "./ItemCarousel";

export default function ItemPage() {
  const [itemInfo, setItemInfo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getItemInfo = async () => {
    const response = await fetch(`/api/shop/${id}`);
    const data = await response.json();
    if (!response.ok) {
      navigate("/404");
    }
    setItemInfo(data);
  };

  useEffect(() => {
    getItemInfo();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <div className="flex flex-col md:flex-row pb-4 px-4 justify-center">
          <div>
            <h1 className="text-3xl py-8 ">Product Name</h1>
            <ItemCarousel />
          </div>

          <div className="flex flex-col justify-center w-fit md:px-4 lg:w-96">
            <div className="badge badge-secondary py-6 px-4 my-4 text-3xl font-semibold mb-4">
              $699.99
            </div>
            <h2 className="text-xl font-bold">Overview</h2>
            <p className="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center w-full">
              <button className="btn btn-primary w-1/2 ">
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
          </div>
        </div>
      </div>
    </>
  );
}
