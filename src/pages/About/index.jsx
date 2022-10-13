import Slider from "react-slick";
import Slick from "../../../src/components/homeComponents/Slick/Slick";
import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import cloud from "../../images/cloud2.png";
import payment from "../../images/credit-card2.png";
import service from "../../images/customer-support2.png";
import Dot from "../../images/Ellipse 32.png";
import Experience from "../../images/Experience.png";
import experience from "../../images/experience2.png";
import IMAGE43 from "../../images/image 43.png";
import IMAGE44 from "../../images/image 44.png";
import IMAGE45 from "../../images/image 45.png";
import IMAGE46 from "../../images/image 46.png";
import IMAGE47 from "../../images/image 47.png";
import image39 from "../../images/image39.png";
import support from "../../images/support2.png";
import vector6 from "../../images/Vector6.png";
import clock from "../../images/wall-clock2.png";
import classes from "./About.module.css";

// import support from "../../images/support2.png";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className={classes.container}>
      <HeadingSection mainTitle="Home" subTitle="About" heading="About Us" />
      <div className={classes.about}>
        <div className={classes.imageContainer}>
          <img src={IMAGE43} alt="Team Members" />
          <div className={classes.inner_div}>
            <img
              src={Experience}
              alt="Experience"
              className={classes.experience}
            />
          </div>
        </div>
        <div className={classes.Wrap}>
          <div className={classes.textContainer}>
            <h2>Know About Us</h2>
            <p>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout. It is a
              long established fact a reader will be distracted by the readable
              content of a page when looking at its layout.
            </p>
            <div className={classes.list}>
              <img src={Dot} alt="" />
              <span>Complete Sanitization and cleaning of bathroom</span>
            </div>
            <div className={classes.list}>
              <img src={Dot} alt="" />
              <span>Biodegradable chemicals are used</span>
            </div>
            <div className={classes.list}>
              <img src={Dot} alt="" />
              <span>Cleaning Tools will be used to remove deep stains </span>
            </div>
            <div className={classes.list}>
              <img src={Dot} alt="" />
              <span>Complete Sanitization and cleaning of bathroom</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.heading}>
        <h2>
          Why Our <span>Marketplace?</span>
        </h2>
        <p>
          It is a long established fact a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
          <div className={classes.cards}>
            <div>
              <img src={service} alt="" />
            </div>
            <h3>Service Commitment </h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div className={classes.experience}>
              <img src={experience} alt="" />
            </div>
            <h3>Super Experience </h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={cloud} alt="" />
            </div>
            <h3> User Data Secure</h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={clock} alt="" />
            </div>
            <h3>Fast Service</h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={payment} alt="" />
            </div>
            <h3>Secure Payment</h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={support} alt="" />
            </div>
            <h3> Dedicated Support </h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
        </div>
      </div>
      <Slick />
      {/* <div className={classes.cardContainer}>
        <div className={classes.cardWrap1}>
          <div className={classes.cards1}>
            <div>
              <img src={cleaning} alt="" />
            </div>
            <h3>Cleaning</h3>
            <span>36+ Services </span>
          </div>
          <div className={classes.cards1}>
            <div>
              <img src={electric} alt="" />
            </div>
            <h3>Electrician</h3>
            <span>36+ Services </span>
          </div>
          <div className={classes.cards1}>
            <div>
              <img src={truck} alt="" />
            </div>
            <h3>Home Move</h3>
            <span>36+ Services </span>
          </div>
          <div className={classes.cards1}>
            <div>
              <img src={saloon} alt="" />
            </div>
            <h3>Salon & Spa</h3>
            <span>36+ Services </span>
          </div>
          <div className={classes.cards1}>
            <div>
              <img src={painting} alt="" />
            </div>
            <h3>Painting </h3>
            <span>36+ Services </span>
          </div>
        </div>
      </div>
      <div className={classes.ellipse}>
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
      </div> */}

      <div className={classes.Wrap2}>
        <div className={classes.textContainer2}>
          <h2>
            Start as a <span>Seller</span>
          </h2>
          <p>
            It is a long established fact a reader will be distracted by the
            readable content of a page when looking at its layout. It is a long
            established fact a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
          <div className={classes.list2}>
            <img src={vector6} alt="" />
            <span>
              {" "}
              It is a long established fact a reader will be distracted by the
              readable content of a page.
            </span>
          </div>
          <div className={classes.list2}>
            <img src={vector6} alt="" />
            <span>
              {" "}
              It is a long established fact a reader will be distracted by the
              readable content of a page.
            </span>
          </div>
          <button>Become A Seller</button>
        </div>
        <div className={classes.imageContainer2}>
          <img src={image39} alt="" />
        </div>
      </div>
      <div className={classes.news}>
        <div>
          <Slider {...settings}>
            <div className={classes.newsImg}>
              <img src={IMAGE45} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE46} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE44} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE47} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE44} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE47} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE46} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE45} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE46} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE45} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE47} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE44} alt="" />
            </div>
          </Slider>
        </div>
        {/* <img src={IMAGE45} alt="" />
        <img src={IMAGE46} alt="" />
        <img src={IMAGE44} alt="" />
        <img src={IMAGE47} alt="" /> */}
      </div>
      {/* <div className={classes.ellipse}>
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
      </div> */}
    </div>
  );
};

export default About;
