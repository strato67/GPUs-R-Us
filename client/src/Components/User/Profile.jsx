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

  return <>{userInfo && <ProfileCard userInfo={userInfo} />}</>;
}
