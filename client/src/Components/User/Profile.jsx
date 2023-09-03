import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";

export default function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getuserInfo = async () => {
    const response = await fetch(`/api/user/${id}`);
    const data = await response.json();
    if (!response.ok) {
      navigate("/404");
    }
    setUserInfo(data);
  };

  useEffect(() => {
    getuserInfo();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 min-h-screen bg-base-200 gap-2">
        <div className="flex justify-center place-self-center ">
          {userInfo && <ProfileCard userInfo={userInfo} />}
        </div>

        <div className="flex justify-center pb-10 ">
          <div className=" w-1/2  bg-base-200 ">
            <div className="card-body">
              <h2 className="text-center md:text-start font-bold text-4xl ">{`Wishlist`}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
