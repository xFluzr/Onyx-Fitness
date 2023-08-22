import { sendEmail } from "../../utils/sendMail";
import "./newsletterForm.css";
import React, { useRef, useState } from "react";


const NewsletterForm = () => {
  const [userMail, setUserMail] = useState("");
  const [invalid,setInvalid]=useState(false)
  const form = useRef();


  /*Sprawdza maila po wzorze*/
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const submitHandler = (e) => {
    e.preventDefault();
    if(emailPattern.test(userMail) && userMail.length>0){
          sendEmail(process.env.REACT_APP_SERVICE_KEY,process.env.REACT_APP_NEWSLETTER_TEMPLATE_KEY,form.current,process.env.REACT_APP_PUBLIC_KEY)
          setInvalid(false)
          setUserMail("")
        }else{
            console.log("err")
            setInvalid(true)
            setUserMail('')
          };
      }
  
    /*jak wpisujemy dane to usuwa czerwony napis i czerowny border w inpucie */
  const inputHandler = (e) => {
    if(invalid){
      setInvalid(false)
    }
    setUserMail(e.target.value);
  };

  return (
    <form
      ref={form}
      className="newsletter--form"
      method="POST"
      onSubmit={submitHandler}
    >
      <input
        onChange={inputHandler}
        value={userMail}
        className={`user__input ${invalid?'invalid__input':''}`}
        name="user_email"
        placeholder="Enter your email"
      />
      {invalid?<span className="error__message">Input invalid</span>:''}
      <button className="btn background" type={"submit"}>
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
