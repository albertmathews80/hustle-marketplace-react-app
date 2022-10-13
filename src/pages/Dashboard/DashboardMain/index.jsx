import React from "react";
import classes from "./DashboardMain.module.css";
import cardImg1 from "./../../../images/cardImg1.png";
import cardImg2 from "./../../../images/cardImg2.png";
import cardImg3 from "./../../../images/cardImg3.png";
import cardImg4 from "./../../../images/cardImg4.png";
import cardImg1Dark from "./../../../images/cardImg1Dark.png";
import cardImg2Dark from "./../../../images/cardImg2Dark.png";
import cardImg3Dark from "./../../../images/cardImg3Dark.png";
import cardImg4Dark from "./../../../images/cardImg4Dark.png";
import user1 from "./../../../images/user1.png";
import pending1 from "./../../../images/pending1.png";
import payperclick from "./../../../images/pay-per-click1.png";
import deliverystatus from "./../../../images/delivery-status1.png";
import dropdownIcon from "./../../../images/dropdownIcon.png";
import deliverystatusBig from "./../../../images/delivery-statusBig.png";
import payperclickBig from "./../../../images/pay-per-click3Big.png";
import pending3Big from "./../../../images/pending3Big.png";
import user2Big from "./../../../images/user2Big.png";
import chart1 from "./../../../images/chart1.png";
import chart2 from "./../../../images/chart2.png";

function index() {
    return (
        <div className={classes.container}>
            <div className={classes.cardSection}>
                <div className={classes.cardWrap}>
                    <img alt="" src={cardImg2} className={classes.lightImage} />
                    <img alt="" src={cardImg2Dark} className={classes.darkImage} />
                    <div className={classes.cardTextWrap}>
                        <div className={classes.cardHeading}>12</div>
                        <div className={classes.cardPara}>Order Pending</div>
                    </div>
                </div>
                <div className={classes.cardWrap}>
                    <img alt="" src={cardImg1} className={classes.lightImage} />
                    <img alt="" src={cardImg1Dark} className={classes.darkImage} />
                    <div className={classes.cardTextWrap}>
                        <div className={classes.cardHeading}>2350</div>
                        <div className={classes.cardPara}>Order Completed</div>
                    </div>
                </div>
                <div className={classes.cardWrap}>
                    <img alt="" src={cardImg4} className={classes.lightImage} />
                    <img alt="" src={cardImg4Dark} className={classes.darkImage} />
                    <div className={classes.cardTextWrap}>
                        <div className={classes.cardHeading}>12</div>
                        <div className={classes.cardPara}>Total Earning</div>
                    </div>
                </div>
                <div className={classes.cardWrap}>
                    <img alt="" src={cardImg3} className={classes.lightImage} />
                    <img alt="" src={cardImg3Dark} className={classes.darkImage} />
                    <div className={classes.cardTextWrap}>
                        <div className={classes.cardHeading}>2350</div>
                        <div className={classes.cardPara}>Balance</div>
                    </div>
                </div>
            </div>
            <div className={classes.chartSection1}>
                <div className={classes.earningChart}>
                    <div className={classes.earningTop}>
                        <div className={classes.earningHeading}>Total Earning Overview</div>
                        <div className={classes.earningDrop}>
                            <div>Jan</div>
                            <div>
                                <img src={dropdownIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <img alt="" src={chart1} className={classes.chartStyle} />
                </div>
                <div className={classes.todo}>
                    <div className={classes.todoHead}>
                        <div className={classes.todoHeading}>To do List</div>
                        <div className={classes.todoDrop}>
                            <div>See More</div>
                            <div>
                                <img src={dropdownIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.todoCheck}>
                        <input alt="" type="checkbox" />
                        <div>It is a long established fact that a reader will be distracted</div>
                    </div>
                    <div className={classes.todoCheck}>
                        <input alt="" type="checkbox" />
                        <div>It is a long established fact that a reader will be distracted</div>
                    </div>
                    <div className={classes.todoCheck}>
                        <input alt="" type="checkbox" />
                        <div>It is a long established fact that a reader will be distracted</div>
                    </div>
                </div>
                <div className={classes.monthsummary}>
                    <div className={classes.monthsummaryHeading}>This Month Summary</div>
                    <div className={classes.monthsummaryWrap}>
                        <div className={classes.summaryCard}>
                            <img alt="" src={pending3Big} />
                            <div className={classes.summaryCardHeading}>130</div>
                            <div className={classes.summaryCardPara}>Order</div>
                        </div>
                        <div className={classes.summaryCard}>
                            <img alt="" src={payperclickBig} />
                            <div className={classes.summaryCardHeading}>$600</div>
                            <div className={classes.summaryCardPara}>Earning</div>
                        </div>
                    </div>
                    <div className={classes.monthsummaryWrap}>
                        <div className={classes.summaryCard}>
                            <img alt="" src={deliverystatusBig} />
                            <div className={classes.summaryCardHeading}>3256</div>
                            <div className={classes.summaryCardPara}>Balance</div>
                        </div>
                        <div className={classes.summaryCard}>
                            <img alt="" src={user2Big} />
                            <div className={classes.summaryCardHeading}>325</div>
                            <div className={classes.summaryCardPara}>Repeat Buyer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.chartSection2}>
                <div className={classes.clientInfo}>
                    <div className={classes.clientInfoHeader}>
                        <div>Client Name</div>
                        <div>Status</div>
                        <div>Location</div>
                        <div>Price</div>
                    </div>
                    <div className={classes.clientInfoValue}>
                        <div>Riyad Hussain</div>
                        <div className={classes.completed}>Completed</div>
                        <div>New York</div>
                        <div>$1475</div>
                    </div>
                    <div className={classes.clientInfoValue}>
                        <div>Riyad Hussain</div>
                        <div className={classes.completed}>Completed</div>
                        <div>New York</div>
                        <div>$1475</div>
                    </div>
                    <div className={classes.clientInfoValue}>
                        <div>Riyad Hussain</div>
                        <div className={classes.completed}>Completed</div>
                        <div>New York</div>
                        <div>$1475</div>
                    </div>
                </div>
                {/* <div className={classes.weeksummary}></div> */}
                <div className={classes.earningChart}>
                    <div className={classes.earningTop}>
                        <div className={classes.earningHeading}>Weekly Work Summary</div>
                        <div className={classes.earningDrop}>
                            <div>Sun</div>
                            <div>
                                <img src={dropdownIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <img alt="" src={chart2} className={classes.chartStyle} />
                </div>
            </div>
        </div>
    );
}

export default index;
