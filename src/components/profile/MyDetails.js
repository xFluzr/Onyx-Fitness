import React, { useState } from "react";
import "../profile/myProgramsAndMyDetails.css";
import DetailInput from "../profile/DetailInput";
import { doc, setDoc } from "firebase/firestore"; 
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../firebase";


const MyDetails = () => {
    const {user}=useUserAuth()
    const [invalidInput,setInvalidInput]=useState(false);
    const [nickName,setNickName]=useState("")
    const [age,setAge]=useState(0)
    const [weight,setWeight]=useState(0)
    const [gender,setGender]=useState("")
    const [height,setHeight]=useState(0)

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
            setNickName("")
            setGender("")
            setAge(0)
            setHeight(0)
            setWeight(0)
        }else{
            setInvalidInput(true)
            setTimeout(()=>{
                setInvalidInput(false)
            },3000)
        }
    }

    return (
        <section id="my-details">
            <div className="my-details__header">
                <h1 className="my-details__title">
                    My details
                </h1>
                <button className="my-details__save" onClick={sendHandler}>
                    save changes
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