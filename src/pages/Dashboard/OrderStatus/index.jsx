import React from "react";
import classes from "./OrderStatus.module.css";
import eyeIcon from "./../../../images/eyeIcon.png";
import printIcon from "./../../../images/printIcon.png";

function index() {
    return (
        <div className={classes.container}>
            <div className={classes.topWrap}>
                <div className={classes.topWrapHeading}>Order Request</div>
                <div className={classes.topWrapPara}>Showing 10 of 50</div>
            </div>
            <div className={classes.btnWrap}>
                <div className={classes.btnActive}>
                    <div className={classes.btnTextActive}>Active</div>
                    <div className={classes.numberActive}>10</div>
                </div>
                <div className={classes.btn}>
                    <div className={classes.btnText}>Delivered</div>
                    <div className={classes.number}>75</div>
                </div>
                <div className={classes.btn}>
                    <div className={classes.btnText}>Completed</div>
                    <div className={classes.number}>90</div>
                </div>
                <div className={classes.btn}>
                    <div className={classes.btnText}>Cancelled</div>
                    <div className={classes.number}>75</div>
                </div>
                <div className={classes.btn}>
                    <div className={classes.btnText}>All</div>
                    <div className={classes.number}>99</div>
                </div>
            </div>
            <div className={classes.tableheadingWrap}>
                <div>Order ID</div>
                <div>Order Summary</div>
                <div>Customer Name</div>
                <div>Service Time</div>
                <div>Service Time</div>
                <div>Order Pricing</div>
                <div>Action</div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
            <div className={classes.tablecontentWrap}>
                <div>asd3420</div>
                <div>Painting & Renovation</div>
                <div>Jhon Doe</div>
                <div>21 Feb, 2022 - 08:00PM</div>
                <div>$280.00</div>
                <div className={classes.btnComplete}>Completed</div>
                <div className={classes.iconWrap}>
                    <img alt="" src={eyeIcon} />
                    <img alt="" src={printIcon} />
                </div>
            </div>
        </div>
    );
}

export default index;
