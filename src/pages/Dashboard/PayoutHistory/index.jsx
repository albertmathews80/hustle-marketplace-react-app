import React from "react";
import classes from "./PayoutHistory.module.css";
import cardImg1 from "./../../../images/cardImg1.png";
import cardImg2 from "./../../../images/cardImg2.png";
import cardImg3 from "./../../../images/cardImg3.png";
import cardImg4 from "./../../../images/cardImg4.png";
import eyeIcon from "./../../../images/eyeIcon.png";
import printIcon from "./../../../images/printIcon.png";

function index() {
    return (
        <div className={classes.container}>
            <div className={classes.cardSection}>
                <div className={classes.cardWrap}>
                    <img alt="" src={cardImg2} className={classes.lightImage} />

                    <div className={classes.cardTextWrap}>
                        <div className={classes.cardHeading}>12</div>
                        <div className={classes.cardPara}>Order Pending</div>
                    </div>
                </div>
                <div className={classes.cardWrap}>
                    <img alt="" src={cardImg1} className={classes.lightImage} />
                    <div className={classes.cardTextWrap}>
                        <div className={classes.cardHeading}>2350</div>
                        <div className={classes.cardPara}>Order Completed</div>
                    </div>
                </div>

                <div className={classes.cardWrap}>
                    <img alt="" src={cardImg4} className={classes.lightImage} />

                    <div className={classes.cardTextWrap}>
                        <div className={classes.cardHeading}>12</div>
                        <div className={classes.cardPara}>Total Earning</div>
                    </div>
                </div>
                <div className={classes.cardWrap}>
                    <img alt="" src={cardImg3} className={classes.lightImage} />

                    <div className={classes.cardTextWrap}>
                        <div className={classes.cardHeading}>2350</div>
                        <div className={classes.cardPara}>Balance</div>
                    </div>
                </div>
            </div>
            <div className={classes.topWrap}>
                <div className={classes.topWrapHeading}>Payout History</div>
                <div className={classes.topWrapPara}>Showing 10 of 50</div>
            </div>

            <div className={classes.tableheadingWrap}>
                <div>Ref ID</div>
                <div>Method</div>
                <div>Date</div>
                <div>Amount</div>
                <div>Downloads</div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>

                <div>21 Feb, 2022 </div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Home & Other Cleaning</div>

                <div>21 Feb, 2022</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>House Move & Shifting</div>

                <div>21 Feb, 2022 </div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Hair Cut & Hair Color</div>

                <div>21 Feb, 2022 </div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Refrigerator Repair</div>

                <div>21 Feb, 2022 </div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Machine Repair</div>

                <div>21 Feb, 2022 </div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Kitchen Hood Repair</div>

                <div>21 Feb, 2022 </div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
            </div>
        </div>
    );
}

export default index;
