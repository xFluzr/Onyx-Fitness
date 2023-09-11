import React, { useState, useEffect } from "react";
import "../pages/profile.css";
import ProfileNavigation from "../components/profile/ProfileNavigation";
import MyPrograms from "../components/profile/MyPrograms";
import UserInfo from "../components/profile/UserInfo";
import MyDetails from "../components/profile/MyDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";

const Profile = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [showPrograms, setShowPrograms] = useState(true);
    const [update, setUpdate] = useState(0);

    const [userInfo, setUserInfo] = useState({
        nickName: "DefaultNick",
        age: 20,
        weight: 75,
        gender: "",
        height: 175
    });

    const { user } = useUserAuth();
    const [userLoaded, setUserLoaded] = useState(false);

    useEffect(() => {

        const usersQuery = query(
            collection(db, "users"),
            where("email", "==", `${user.email}`)
        );

        const getFirebaseUser = async () => {
            const data = await getDocs(usersQuery);
            if (data.empty) {
                // console.log("User info - No users found!");
                return;
            } else {
                data.forEach((doc) => {
                    setUserInfo({
                        nickName: doc.data().nickName,
                        age: doc.data().age,
                        weight: doc.data().weight,
                        gender: doc.data().gender,
                        height: doc.data().height
                    })
                });
                setUserLoaded(true);
            }
        };

        let wait = setTimeout(() => {
            getFirebaseUser();
        }, 500)

        return() => clearTimeout(wait);
    }, [update]);

    console.log("User info", userInfo);

    const toggleUserInfo = () => {
        document.body.classList.toggle("user-info-open")
    }

    const onClickShowPrograms = () => {
        setShowPrograms(true);
    }

    const onClickShowDetail = () => {
        setShowPrograms(false);
    }

    return (
        <section id="profile">
            <ProfileNavigation onClickShowPrograms={onClickShowPrograms} onClickShowDetail={onClickShowDetail} />
            <div className="container">
                <div className="profile__box">
                    <button className="profile__dashbord--button" onClick={toggleUserInfo}>
                        <FontAwesomeIcon className="profile__dashbord--icon" icon={faCaretRight} />
                    </button>
                    <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} userLoaded={userLoaded} update={update}/>
                    {
                        showPrograms ? (
                            <MyPrograms />
                        ) : (
                            <MyDetails userInfo={userInfo} setUserInfo={setUserInfo} setUpdate={setUpdate}/>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Profile;