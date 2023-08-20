import './userInfoForm.css';

const UserInfoForm = () => {

  const submitHanlder=(e)=>{
    e.preventDefault();
  }

  return (
    <form className='userInfo-form__wrapper' onSubmit={submitHanlder}>
        <h3 className='form__title'>Contact us</h3>
        <input className='userInfo-form__input' type='text' placeholder='Full Name*' required={true}/>
        <input className='userInfo-form__input' type='email' placeholder='Email*' required={true}/>
        <textarea className='userInfo-form__input' placeholder='Message'></textarea>
        <button className="btn background" type={"submit"}>
            Submit now
      </button>
    </form>
  )
}

export default UserInfoForm