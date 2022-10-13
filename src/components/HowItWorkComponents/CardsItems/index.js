import React from "react";
import classes from "./CardsItems.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HouseMoving from "../../../images/Housemoving.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import pricetag from "../../../images/pricetag.png";
import timeleft1 from "../../../images/timeleft1.png"
import PlainCard from '../../common/PlainCard'

const CardsItems = () => {
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

      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
          <div>
            {/* <h2> Multiple items </h2> */}
            <Slider {...settings}>
              <PlainCard
                cardImage={HouseMoving}
                firstIcon={timeleft1}
                postFirstIcon='20 Sep 2022'
                secondIcon={pricetag}
                postSecondIcon='Moving'
                cardHeading={'House Moving & Shifting Services'}
                cardParagraph={'It is a long established fact that a reader will be distracted by the readable'}
              />
              <PlainCard
                cardImage={people3}
                firstIcon={timeleft1}
                postFirstIcon='20 Sep 2022'
                secondIcon={pricetag}
                postSecondIcon='Moving'
                cardHeading={'All Emergency Electrical Supports'}
                cardParagraph={'It is a long established fact a reader will be distracted by thereadable'}
              />
              <PlainCard
                cardImage={people2}
                firstIcon={timeleft1}
                postFirstIcon='20 Sep 2022'
                secondIcon={pricetag}
                postSecondIcon='Moving'
                cardHeading={'All Hair Cut & Hair Color Services'}
                cardParagraph={' It is a long established fact a reader will be distracted by thereadable'}
              />
              <PlainCard
                cardImage={people2}
                firstIcon={timeleft1}
                postFirstIcon='20 Sep 2022'
                secondIcon={pricetag}
                postSecondIcon='Moving'
                cardHeading={'All Hair Cut & Hair Color Services'}
                cardParagraph={' It is a long established fact a reader will be distracted by thereadable'}
              />
              <PlainCard
                cardImage={people2}
                firstIcon={timeleft1}
                postFirstIcon='20 Sep 2022'
                secondIcon={pricetag}
                postSecondIcon='Moving'
                cardHeading={'All Hair Cut & Hair Color Services'}
                cardParagraph={' It is a long established fact a reader will be distracted by thereadable'}
              />

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsItems;
