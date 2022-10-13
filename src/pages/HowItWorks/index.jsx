import CardsCarousel from "./../../components/HustlerComponents/CardsCarousel";
import HeadingSection from "./../../components/servicesComponents/HeadingSection/HeadingSection";
import howWorksImg from "./../../images/howItWorks.png";
import hustlerImage from "./../../images/hustlers.png";
import classes from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <div className={classes.container}>
      <div className={classes.HeadingSection}>
        <HeadingSection
          mainTitle="Home"
          subTitle="How it Works"
          heading="How it Works"
        />
      </div>
      <CardsCarousel />
      <div className={classes.containerWrap}>
        <div className={classes.left}>
          <img src={howWorksImg} alt="" />
        </div>
        <div className={classes.right}>
          <h1>Benefits as Customer</h1>
          <p>
            It is a long established fact a reader will be distracted by
            thereadableIt is a long established fact a reader will be distracted
            by thereadableIt is a long established fact a readerwill be
            distracted by thereadable
          </p>
          <button>Explore Services </button>
        </div>
      </div>
      <div className={classes.containerWrap}>
        <div className={classes.right}>
          <h1>Benefits as Hustler </h1>
          <p>
            It is a long established fact a reader will be distracted by
            thereadableIt is a long established fact a reader will be distracted
            by thereadableIt is a long established fact a readerwill be
            distracted by thereadable
          </p>
          <button>Become Hustler</button>
        </div>
        <div className={classes.left}>
          <img src={hustlerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
