import classes from './ServiceDetail.module.css'
import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import cleaningImage from "../../images/cleaning.png";
import avatarImage from "../../images/avatar1.png";
// import heart from "../../images/Icon110heart.png";
import left from "../../images/Icon111left.png";
import right from "../../images/Icon112right.png";
// import sound from "../../images/Icon113sound.png";
import starImage from "../../images/Star1.png";
import Overview from '../../components/ServiceDetailComponents/Overview';
import Image202 from "./../../images/Image202.png";
import Profile from "./../../images/image2.png";
import Electrician from "./../../images/people3.png";
import phone from "./../../images/Icon114phone.png";
import CardWithPrice from '../../components/common/CardWithPrice'
import AboutSeller from '../../components/ServiceDetailComponents/AboutSeller';
import Review from '../../components/ServiceDetailComponents/Review';
import { useState } from 'react';


const ServiceDetail = () => {
  const [overview, setOverview] = useState(true)
  const [about, setAbout] = useState(false)
  const [review, setReview] = useState(false)

  const overviewHandler = () => {
    setOverview(true)
    setAbout(false)
    setReview(false)
  }

  const aboutHandler = () => {
    setOverview(false)
    setAbout(true)
    setReview(false)
  }

  const reviewHandler = () => {
    setOverview(false)
    setAbout(false)
    setReview(true)
  }



  return (
    <div className={classes.container}>
      <div className={classes.containerWrap}>
        <HeadingSection
          mainTitle="Home"
          subTitle="Services | Service Details"
        />
        <h1>Cleaning Package <span> (Bedroom + Sofa + Furniture + Bathroom)</span></h1>
        <div className={classes.main}>
          {/* Left  Side */}
          <div className={classes.mainContainer}>
            <div className={classes.profileContainer} >
              <div className={classes.imageContainer}>
                
                <div className={classes.arrowImage1} > <img src={left} alt="" /></div>
                <img className={classes.mainImage} src={cleaningImage} alt="" />
                <div className={classes.arrowImage2}> <img  src={right} alt="" /></div>
              </div>
              <div className={classes.avatarContainer}>
                <div className={classes.avatarLeft}>
                  <div><img src={avatarImage} alt="" width='25' /></div>
                  <div>Ryad Hussain</div>
                </div>


                <div className={classes.avatarRight}>
                  <img src={starImage} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
            </div>

            <div className={classes.primaryContainer}>
              <div className={classes.navContainer}>
                <div className={classes.nav}>
                  <div onClick={overviewHandler} className={overview ? classes['active'] : ''} >Overview</div>
                  <div onClick={aboutHandler} className={about ? classes['active'] : ''} >About Seller</div>
                  <div onClick={reviewHandler} className={review ? classes['active'] : ''} >Review</div>
                </div>
              </div>
              <div className={classes.switchingContainer}>
                {overview && <Overview />}
                {about && <AboutSeller />}
                {review && <Review />}

              </div>

            </div>

            <div className={classes.secondContainer}>
              <div className={classes.head}>
                <h2>Other Services</h2>
                <h6>Explore All &nbsp; &gt;</h6>
              </div>
              <div className={classes.cards} >
                <CardWithPrice cardImage={Image202}
                  profileText='Ryad Husssain'
                  rating='4.9(231)'
                  cardHeading='All Painting & Renovation Service'
                  cardParagraph='It is a long established fact a reader will be distracted by thereadable'
                  cardPrice='80.00'
                  buttonText="Book Appointment"
                  profileIcon={Profile}
                  ratingIcon={starImage}
                />
                <CardWithPrice cardImage={Electrician}
                  profileText='Ryad Husssain'
                  rating='4.9(231)'
                  cardHeading='All Emergency Electrical Supports'
                  cardParagraph='It is a long established fact a reader will be distracted by thereadable'
                  cardPrice='80.00'
                  buttonText="Book Appointment"
                  profileIcon={Profile}
                  ratingIcon={starImage}
                />
              </div>

            </div>
          </div>




          {/* Right Side */}
          <div className={classes.cardContainer}>
            <div className={classes.card}>
              <div className={classes.cardHeading}>
                <div className={classes.black}>Standard </div>
                <div className={classes.grey}> Premium</div>
              </div>
              <div className={classes.price}>$150</div>
              <div className={classes.text}>will be distracted by there a
                bleIt is a long established fact
                a reader will be distracted by
                thereadable</div>

              <div className={classes.cardBtn}>
                Book Appointment
              </div>

            </div>

            <div className={classes.contactBtn}> <img src={phone} alt="" /> Contact Hustler</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
