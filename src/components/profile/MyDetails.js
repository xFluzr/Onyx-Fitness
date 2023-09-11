import React, { useEffect, useState } from "react";
import "../profile/myProgramsAndMyDetails.css";
import DetailInput from "../profile/DetailInput";
import { doc, setDoc, query, collection, where, getDocs } from "firebase/firestore"; 
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../firebase";


const MyDetails = ({setUserInfo, setUpdate}) => {
    const {user}=useUserAuth()
    const [invalidInput,setInvalidInput]=useState(false);
    const [saved, setSaved] = useState(false);
    const [nickName,setNickName]=useState("DefaultNick");
    const [age,setAge]=useState(20);
    const [weight,setWeight]=useState(175);
    const [gender,setGender]=useState("");
    const [height,setHeight]=useState(180);

    const sendHandler=async()=>{
        if(nickName.length>0 && age<120 &&age>0 && weight<300 && height<250){
            await setDoc(doc(db,"users",user.email),{
                email:user.email,
                nickName,
                age,
                weight,
                gender,
                height
            }
            )
            setSaved(true);
            setUserInfo({
                nickName: nickName,
                age: age,
                weight: weight,
                gender: gender,
                height: height
            })
        }else{
            setInvalidInput(true)
            setTimeout(()=>{
                setInvalidInput(false)
            },3000)
        }
    }

    useEffect(()=> {
        const restoreButton = setTimeout(() => {
            setSaved(false);
        },3000)

        return() => clearTimeout(restoreButton);
    },[saved])

    useEffect(() => {
    
        const usersQuery = query(
          collection(db, "users"),
          where("email", "==", `${user.email}`)
        );
    
        const getFirebaseUser = async () => {
          const data = await getDocs(usersQuery);
          if (data.empty) {
            // console.log("No users found!");
            return;
          } else {
            data.forEach((doc) => {
                setNickName(doc.data().nickName);
                setAge(doc.data().age);
                setWeight(doc.data().weight);
                setGender(doc.data().gender);
                setHeight(doc.data().height);
            });
          }
        };
        getFirebaseUser();
      }, []);

    return (
        <section id="my-details">
            <div className="my-details__header">
                <h1 className="my-details__title">
                    My details
                </h1>
                <button className={`my-details__save ${saved && "green-bg"}`} onClick={() => {
                    sendHandler();
                    setUpdate((k) => k + 1);
                }}>
                    {saved ? "changes saved" : "save changes" }
                </button>
            </div>
            <div className="details__box">
                <div className={invalidInput?"details__invalid--show":"details__invalid--hide"}>Invalid input value</div>
                <DetailInput label="Nickname" name="nickname" type="text" id="detail_nickname" value={nickName} updateFunction={setNickName}/>
                <DetailInput label="Age" name="age" type="number" id="details_age" value={age} updateFunction={setAge}/>
                <DetailInput label="Height (cm)" name="height" type="number" id="details_height" value={height} updateFunction={setHeight}/>
                <DetailInput label="Weight (kg)" name="weight" type="number" id="details_weight" value={weight} updateFunction={setWeight}/>
                <div className="gender__box">
                    <DetailInput label="Man" name='gender' type="radio" id="details_man" value="man" updateFunction={setGender}/>
                    <DetailInput label="Woman" name='gender' type="radio" id="details_woman" value="women" updateFunction={setGender}/>
                </div>
                
            </div>
        </section>
    )
}

export default MyDetails;