import CardsCarousel from "../../components/HustlerComponents/CardsCarousel";
import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import hustlerImage from "../../images/hustler.png";
import classes from "./BecomeHustler.module.css";

const BecomeAHustler = () => {
  return (
    <div className={classes.container}>
      <div className={classes.HeadingSection}>
        <HeadingSection
          mainTitle="Home"
          subTitle="Become a hustler"
          heading="Become a Hustler "
        />
      </div>
      <div className={classes.containerWrap}>
        <div className={classes.left}>
          <img src={hustlerImage} alt="" />
        </div>
        <div className={classes.right}>
          <p>
            It is a long established fact a reader will be distracted by
            thereadableIt is a long established fact a reader will be distracted
            by thereadableIt is a long established fact a readerwill be
            distracted by thereadable It is a long established fact a reader
            will be distracted by thereadableIt is a long established fact a
            reader will be distracted by thereadableIt is a long established
            fact a
          </p>
          <button>Become a Hustler</button>
        </div>
      </div>
      <CardsCarousel />
    </div>
  );
};

export default BecomeAHustler;
