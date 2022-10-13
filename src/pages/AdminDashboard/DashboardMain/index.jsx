import React from "react";
import classes from "./DashboardMain.module.css";
import Heading from "../common/Heading";
import rolesIcon from '../../../images/Icon127roles.png'
import statsIcon from '../../../images/Icon128totalstats.png'
import buyerIcon from '../../../images/Icon129buyers.png'
import cardImg1Dark from "./../../../images/cardImg1Dark.png";
import cardImg2Dark from "./../../../images/cardImg2Dark.png";
import cardImg4Dark from "./../../../images/cardImg4Dark.png";


function index() {
  return (
    <div className={classes.container}>
      <Heading heading="Statistics" />
       <div className={classes.cardSection}>
        <div className={classes.cardWrap}>
          <img alt="" src={rolesIcon} className={classes.lightImage} />
          <img alt="" src={cardImg2Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Roles</div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <img alt="" src={statsIcon} className={classes.lightImage} />
          <img alt="" src={cardImg1Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>$150</div>
            <div className={classes.cardPara}>Total Buyers</div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <img alt="" src={buyerIcon} className={classes.lightImage} />
          <img alt="" src={cardImg4Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Sellers</div>
          </div>
        </div>
      </div> 
       <div className={classes.cardSection}>
        <div className={classes.cardWrap}>
          <img alt="" src={rolesIcon} className={classes.lightImage} />
          <img alt="" src={cardImg2Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Roles</div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <img alt="" src={statsIcon} className={classes.lightImage} />
          <img alt="" src={cardImg1Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>$150</div>
            <div className={classes.cardPara}>Total Buyers</div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <img alt="" src={buyerIcon} className={classes.lightImage} />
          <img alt="" src={cardImg4Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Sellers</div>
          </div>
        </div>
      </div> 
       <div className={classes.cardSection}>
        <div className={classes.cardWrap}>
          <img alt="" src={rolesIcon} className={classes.lightImage} />
          <img alt="" src={cardImg2Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Roles</div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <img alt="" src={statsIcon} className={classes.lightImage} />
          <img alt="" src={cardImg1Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>$150</div>
            <div className={classes.cardPara}>Total Buyers</div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <img alt="" src={buyerIcon} className={classes.lightImage} />
          <img alt="" src={cardImg4Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Sellers</div>
          </div>
        </div>
      </div> 
     
    </div>
  );
}

export default index;
