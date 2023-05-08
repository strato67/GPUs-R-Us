import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getuserInfo = async () => {
      const response = await fetch(`/api/user/${id}`);
      const data = await response.json();
      if (response.ok) {
        setUserInfo(data);
      }
    };
    getuserInfo();
  }, []);

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">K</span>
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
