import React from "react";
import classes from "./DashboardMain.module.css";
import cardImg1Dark from "./../../../images/cardImg1Dark.png";
import cardImg2Dark from "./../../../images/cardImg2Dark.png";
import cardImg4Dark from "./../../../images/cardImg4Dark.png";
import total from "../../../images/Icon121total.png";
import earnings from "../../../images/Icon120earning.png";
import business from "../../../images/Icon122business.png";

function index() {
  return (
    <div className={classes.container}>
      <div className={classes.cardSection}>
        <div className={classes.card}>
          <div className={classes.cardIconContainer}>
            <img alt="" src={total} className={classes.lightImage} />
          </div>
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Projects</div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardIconContainer}>
            <img alt="" src={earnings} className={classes.lightImage} />
          </div>
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>$150</div>
            <div className={classes.cardPara}>Total Earning</div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardIconContainer}>
            <img alt="" src={business} className={classes.lightImage} />
          </div>
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Offers</div>
          </div>
        </div>
      </div>
      <div className={classes.projectsSection}>
        <div className={classes.heading}>
          <h2>Your Projects</h2>
          <button>View All</button>
        </div>
        <div className={classes.project}>
          <div className={classes.projectHeading}>
            <div>Painting</div>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout....
            </span>
          </div>
          <div className={classes.right}>
              <div className={classes.keyValue}>
                <span>Start Date</span>
                <div> 12 Jun - 2022</div>
              </div>
              <div className={classes.keyValue}>
                <span>End Date</span>
                <div> 12 Jun - 2022</div>
              </div>
              <div className={classes.keyValue}>
                <span>Payout</span>
                <div> $8</div>
            </div>
            <div className={classes.projectBtn}>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectHeading}>
            <div>Painting</div>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout....
            </span>
          </div>
          <div className={classes.right}>
            <div className={classes.keyValue}>
              <span>Start Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>End Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>Payout</span>
              <div> $8</div>
            </div>
            <div className={classes.projectBtn}>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectHeading}>
            <div>Painting</div>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout....
            </span>
          </div>
          <div className={classes.right}>
            <div className={classes.keyValue}>
              <span>Start Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>End Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>Payout</span>
              <div> $8</div>
            </div>
            <div className={classes.projectBtn}>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
