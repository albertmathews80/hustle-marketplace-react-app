import React from "react";
import classes from "./CardsCarousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import star from "../../../images/Star1.png";
import profile from "../../../images/image2.png";
import CardWithPrice from "../../common/CardWithPrice";

const CardsCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>
          Recent <span>Blog & Articles</span>
        </h2>
        <p>
          It is a long established fact a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
          <div>
            {/* <h2> Multiple items </h2> */}
            <Slider {...settings}>
              <CardWithPrice
                cardImage={people1}
                profileIcon={profile}
                profileText={'Ryad Hussain'}
                ratingIcon={star}
                rating={'4.9 (231)'}
                cardHeading={'All Painting & Renovation Service'}
                cardParagraph={'It is a long established fact a reader will be distracted by thereadable'}
                cardPrice={'80.00'}
                buttonText={'Book Appointment'}
              />
              <CardWithPrice
                cardImage={people2}
                profileIcon={profile}
                profileText={'Ryad Hussain'}
                ratingIcon={star}
                rating={'4.9 (231)'}
                cardHeading={'All Hair Cut & Hair Color Service'}
                cardParagraph={'It is a long established fact a reader will be distracted by thereadable'}
                cardPrice={'60.00'}
                buttonText={'Book Appointment'}
              />
              <CardWithPrice
                cardImage={people3}
                profileIcon={profile}
                profileText={'Ryad Hussain'}
                ratingIcon={star}
                rating={'4.9 (231)'}
                cardHeading={'All Emergency Electrical Supports'}
                cardParagraph={'It is a long established fact a reader will be distracted by thereadable'}
                cardPrice={'60.00'}
                buttonText={'Book Appointment'}
              />
              <CardWithPrice
                cardImage={people1}
                profileIcon={profile}
                profileText={'Ryad Hussain'}
                ratingIcon={star}
                rating={'4.9 (231)'}
                cardHeading={'All Painting & Renovation Service'}
                cardParagraph={'It is a long established fact a reader will be distracted by thereadable'}
                cardPrice={'80.00'}
                buttonText={'Book Appointment'}
              />
              <CardWithPrice
                cardImage={people2}
                profileIcon={profile}
                profileText={'Ryad Hussain'}
                ratingIcon={star}
                rating={'4.9 (231)'}
                cardHeading={'All Hair Cut & Hair Color Service'}
                cardParagraph={'It is a long established fact a reader will be distracted by thereadable'}
                cardPrice={'60.00'}
                buttonText={'Book Appointment'}
              />
              <CardWithPrice
                cardImage={people3}
                profileIcon={profile}
                profileText={'Ryad Hussain'}
                ratingIcon={star}
                rating={'4.9 (231)'}
                cardHeading={'All Emergency Electrical Supports'}
                cardParagraph={'It is a long established fact a reader will be distracted by thereadable'}
                cardPrice={'60.00'}
                buttonText={'Book Appointment'}
              />            
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCarousel;
