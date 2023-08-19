import UserOpinion from "./UserOpinion";
import "./opinions.css";
//GENERATES RANDOM NUMBER BETWEEN 3 AND 50
const randomNumber = () => {
  return Math.floor(Math.random() * 50) + 3;
};

const Opinions = () => {
  const number = randomNumber();

  return (
    <section id="opinions">
      <div className="container">
        <div className="opinions__wrapper">
          <h2 className="section__title">
            <span className="heading-pink">People</span> Love Us
          </h2>
          <hr className="line" />
          <p className="section__text">
            At our gym, we believe that the true essence of our success lies in
            the opinions and experiences shared by our valued members.
          </p>
          <div className="user__opinions">
            <UserOpinion
              userInfo="Mateo, 25"
              rating={4.5}
              imgSrc={`https://randomuser.me/api/portraits/med/men/${
                number + 2
              }.jpg`}
              description={
                "If you're looking for a gym with state-of-the-art equipment and knowledgeable trainers, look no further than Onyx. I've never felt more supported in my fitness journey."
              }
            />
            <UserOpinion
              userInfo="Julia, 32"
              rating={5.0}
              imgSrc={`https://randomuser.me/api/portraits/med/women/${
                number + 2
              }.jpg`}
              description={
                "I highly recommend Onyx for anyone who wants to see real results. The variety of classes and personalized attention from trainers make it a cut above the rest."
              }
            />
            <UserOpinion
              userInfo="Elon, 48"
              rating={4.5}
              imgSrc={`https://randomuser.me/api/portraits/med/men/${
                number - 2
              }.jpg`}
              description={
                "For a gym that combines a fun and welcoming atmosphere with top-notch facilities, Onyx is the clear choice. Join now and get ready to crush your fitness goals!"
              }
            />
            <UserOpinion
              userInfo="Nikita, 24"
              rating={5.0}
              imgSrc={`https://randomuser.me/api/portraits/med/women/${
                number - 2
              }.jpg`}
              description={
                "I've tried many gyms over the years, but none have come close to Onyx. With expert trainers and a supportive community, it's the best gym I've ever been a part of."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
