import React, { useRef, useState } from 'react';
import { sendEmail } from '../../utils/sendMail';
import './userInfoForm.css';


const UserInfoForm = () => {
  const form = useRef()

  const [messageSent, setMessageSent] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    sendEmail(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_CONTACT_FORM_TEMPLATE_KEY, form.current, process.env.REACT_APP_PUBLIC_KEY);
    setMessageSent(true);
    /*Cleaning input */
    e.target.reset()
  }

  return (
    <form ref={form} className='userInfo-form__wrapper' onSubmit={submitHandler}>
      {
        messageSent ? (
          <h3 className='succes__message'>Success, message was sent</h3>
        ) : (
          <>
            <h3 className='form__title'>Contact us</h3>
            <input className='userInfo-form__input' type='text' name='full_name' placeholder='Full Name*' required={true} />
            <input className='userInfo-form__input' type='email' name='user_email' placeholder='Email*' required={true} />
            <textarea className='userInfo-form__input' name='user_message' placeholder='Message'></textarea>
            <button className="btn background" type={"submit"}>
              Submit now
            </button>
          </>
        )
      }

    </form>
  )
}

export default UserInfoForm