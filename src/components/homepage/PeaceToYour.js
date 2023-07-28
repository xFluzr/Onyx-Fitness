import Button from "./Button";
import "./peacetoyour.css";

//IMAGE
import YogaWoman from "../../assets/homepage/instructor.png";
import Certifed from "../../assets/homepage/certified.svg";
import YogaLesson from "../../assets/homepage/yogaLesson.svg";

const PeaceToYour = () => {
  return (
    <section id="peace-to-your">
        <div className="container">
            <div className="section-wrapper">
            <img className="section-image" src={YogaWoman} alt="Woman doing yoga"/>
            <div className="section-content">
              <h2 className="heading-pink section-title">Peace to Your</h2>
              <h3 className="section-subtitle">body and mind</h3>
              <hr className="line"/>
              <p className="instructor-description">
              Hi, My name is Anna Smith as a passionate yoga instructor, I am dedicated to helping my students achieve their goals in a supportive environment. My goal is to help you feel more centered, strong, and balanced both on and off the mat.
              </p>
              <ul className="yoga-advantages">
                <li className="yoga-advantage">
                  <img className="advantage-icon" src={YogaLesson} alt="Yoga Lesson"/>
                  <div className="advantage-content">
                    <h4 className="advantage-title">Professional Yoga Instructor</h4>
                  </div>
                  
                </li>
                <li className="yoga-advantage">
                  <img className="advantage-icon" src={Certifed} alt="Certified"/>
                  <div className="advantage-content">
                    <h4 className="advantage-title">Certified physiotherapist</h4>
                  </div>
                  
                </li>
              </ul>
              <Button type={"button"} isBackground={true} text={"Join Me"} additionalClasses="join-me"/>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default PeaceToYour