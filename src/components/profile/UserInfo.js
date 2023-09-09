import React, { useEffect, useState } from "react";
import "../profile/userInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";

import Woman from "../../assets/profile/woman.png";
import Man from "../../assets/profile/man.png";
import UserDetail from "./UserDetail";

const UserInfo = ({userInfo,setUserInfo}) => {
  const { user } = useUserAuth();
  const [userLoaded, setUserLoaded] = useState(false);

  const toggleUserInfo = async () => {
    document.body.classList.toggle("user-info-open");
  };

  useEffect(() => {
    
    const usersQuery = query(
      collection(db, "users"),
      where("email", "==", `${user.email}`)
    );

    const getFirebaseUser = async () => {
      const data = await getDocs(usersQuery);
      if (data.empty) {
        console.log("No users found!");
        return;
      } else {
        data.forEach((doc) => {
          setUserInfo({
            data: doc.data(),
            id: doc.id,
          });
        });
        setUserLoaded(true);
        
      }
    };
    getFirebaseUser();
  }, [userLoaded,userInfo]);
  return (
    <section id="user-info">
      <figure className="user-info__img--wrapper">
        <img
          className="user-info__img"
          src={userInfo?.data?.gender==="man"?Man:Woman}
          alt="profile"
        />
      </figure>
      <div className="user-info__box">
        <p className="user-info__name">{userLoaded? userInfo?.data?.nickName:"DefaultNick"}</p>
        <UserDetail detail="Age" value={userLoaded ? userInfo?.data.age : "20"} />
        <UserDetail
          detail="Height"
          value={userLoaded ? userInfo?.data.height : "150"}
        />
        <UserDetail
          detail="Weight"
          value={userLoaded ? userInfo?.data.weight : "80"}
        />
      </div>
      <FontAwesomeIcon
        className="user-info__close--icon"
        icon={faXmark}
        onClick={toggleUserInfo}
      />
    </section>
  );
};

export default UserInfo;
