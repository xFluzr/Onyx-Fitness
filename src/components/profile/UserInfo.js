import React from "react";
import "../profile/userInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Woman from "../../assets/profile/woman.png";
import Man from "../../assets/profile/man.png";
import UserDetail from "./UserDetail";
import { useUserAuth } from "../../context/UserAuthContext";

const UserInfo = ({userInfo, userLoaded, update}) => {

  const { user } = useUserAuth();
  let temporaryNickaname = user.email.split("@")[0].slice(0,12);

  const toggleUserInfo = async () => {
    document.body.classList.toggle("user-info-open");
  };

  return (
    <section id="user-info" update={update}>
      <figure className="user-info__img--wrapper">
        <img
          className="user-info__img"
          src={userInfo?.gender==="women"?Woman:Man}
          alt="profile"
        />
      </figure>
      <div className="user-info__box">
        <p className="user-info__name">{userLoaded? userInfo?.nickName : temporaryNickaname}</p>
        <UserDetail detail="Age" value={userLoaded ? userInfo?.age : "20"} />
        <UserDetail
          detail="Height"
          value={userLoaded ? userInfo?.height : "175"}
        />
        <UserDetail
          detail="Weight"
          value={userLoaded ? userInfo?.weight : "80"}
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
