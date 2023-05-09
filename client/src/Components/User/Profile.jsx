import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
      <div className=" min-h-screen bg-base-200">
        <div className="flex justify-center py-5">
          {userInfo && <ProfileCard userInfo={userInfo} />}
        </div>

        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Wishlist</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
