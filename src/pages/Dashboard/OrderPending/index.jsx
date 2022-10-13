import React from "react";
import classes from "./OrderPending.module.css";
import eyeIcon from "./../../../images/eyeIcon.png";
import printIcon from "./../../../images/printIcon.png";
import cupIcon from "./../../../images/cupIcon.png";
import orderRequestImg1 from "./../../../images/orderRequestImg1.png";
import orderRequestImg2 from "./../../../images/orderRequestImg2.png";

function index() {
    return (
        <div className={classes.container}>
            <div className={classes.topWrap}>
                <div className={classes.topWrapHeading}>Order Request (2)</div>
                <div className={classes.topWrapPara}>Showing 2 of 24</div>
            </div>
            <div className={classes.cardContainer}>
                <div className={classes.card}>
                    <div className={classes.leftSideWrap}>
                        <img src={orderRequestImg1} alt="" className={classes.leftImg} />
                        <div className={classes.leftSide}>
                            <div className={classes.leftSideHeading}>Painting & Renovation Service</div>
                            <div className={classes.leftSidePara}>Order #200124</div>
                            <div className={classes.leftSideBtn}>New Request</div>
                        </div>
                    </div>
                    <div className={classes.middleSide}>
                        <div className={classes.middleSideHeading}>$280.00</div>
                        <div className={classes.middleSidePara}>21 Feb, 2022 - 08:00pm</div>
                        <div className={classes.inputWrap}>
                            <input type="checkbox" />
                            <div>Cash</div>
                        </div>
                    </div>

                    <div className={classes.rightSide}>
                        <div className={classes.rightSideBtn}>Accept Order</div>
                        <div className={classes.rightSideIconWrap}>
                            <img src={eyeIcon} alt="" />
                            <img src={printIcon} alt="" />
                            <img src={cupIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.leftSideWrap}>
                        <img src={orderRequestImg2} alt="" className={classes.leftImg} />
                        <div className={classes.leftSide}>
                            <div className={classes.leftSideHeading}>Painting & Renovation Service</div>
                            <div className={classes.leftSidePara}>Order #200124</div>
                            <div className={classes.leftSideBtn}>New Request</div>
                        </div>
                    </div>
                    <div className={classes.middleSide}>
                        <div className={classes.middleSideHeading}>$280.00</div>
                        <div className={classes.middleSidePara}>21 Feb, 2022 - 08:00pm</div>
                        <div className={classes.inputWrap}>
                            <input type="checkbox" />
                            <div>Cash</div>
                        </div>
                    </div>

                    <div className={classes.rightSide}>
                        <div className={classes.rightSideBtn}>Accept Order</div>
                        <div className={classes.rightSideIconWrap}>
                            <img src={eyeIcon} alt="" />
                            <img src={printIcon} alt="" />
                            <img src={cupIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
