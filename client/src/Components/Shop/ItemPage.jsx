import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    setUserInfo(data);
  };

  useEffect(() => {
    getItemInfo();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <div className="flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
             
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
