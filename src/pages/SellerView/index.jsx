import classes from './SellerView.module.css'
import userProfilePicture from '../../images/image 9.png'
import star from '../../images/Star4.png'
import star2 from '../../images/Star 22.png'
import starlight from '../../images/Star 23.png'
import tick from '../../images/Vector 36.png'

const SellerView = () => {
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.user} >
                    <div className={classes.userImage}>
                        <img src={userProfilePicture} alt="" />
                    </div>
                    <div className={classes.userDetails}>
                        <div className={classes.userName}>John Cena</div>
                        <div className={classes.userRating}>
                            <img src={star} alt="" />
                            <span>4.9 (231)</span>
                        </div>
                    </div>
                </div>
                <div className={classes.userinfo}>
                    <div className={classes.inquired}>
                        <span className={classes.grey}>From: </span>
                        <span>Bangladesh</span>
                    </div>
                    <div className={classes.inquired}>
                        <span className={classes.grey}>Seller since: </span>
                        <span>2020</span>
                    </div>

                </div>
                <div className={classes.orders}>
                    <div className={classes.blackContainer}>
                        <div className={classes.icon}>
                            <img src={tick} alt="" />
                        </div>
                        <div className={classes.numbers}>220</div>
                        <div className={classes.text}>Orders</div>
                    </div>
                </div>
            </div>


            <div className={classes.main}>
                <div className={classes.heading}>Order Views</div>
                <div className={classes.orderContainer}>
                    <div className={classes.service}>
                        <div className={classes.left}>
                            <div className={classes.serviceName}>Painting and Renovation Sevice</div>
                            <div className={classes.serviceDate}>11 Feb, 2022-08:00pm</div>
                            <div className={classes.paymentMethod}>Paypal</div>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.status}>Completed</div>
                            <div className={classes.orderNumber}>Order #200124</div>
                            <div className={classes.serviceRating}>
                                <img src={starlight} alt="" />
                                <img src={starlight} alt="" />
                                <img src={starlight} alt="" />
                                <img src={starlight} alt="" />
                                <img src={starlight} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.BookingInformation}>
                        <h2>Booking Information</h2>
                        <div className={classes.info}>
                            <div className={classes.infoLeft}>
                                <div >Name</div>
                                <div >Email</div>
                                <div >Phone</div>
                                <div >City</div>
                                <div >Area</div>
                                <div >Post Code</div>
                                <div >Address</div>
                            </div>
                            <div className={classes.infoRight}>
                                <div >{"John Doe"}</div>
                                <div >{"customer@gmail.com"}</div>
                                <div >{"011-2234567890"}</div>
                                <div >{"New York"}</div>
                                <div >{"New York"}</div>
                                <div >{"1122"}</div>
                                <div >{"2608 Ritter Avenue Livonia, MI 4815"}</div>
                            </div>
                        </div>

                    </div>
                    <div className={classes.orderSummary}>
                        <h2>Order Summary</h2>
                        <div className={classes.APServiceContainer}>
                            <div className={classes.subHeading}>Appointment Service</div>
                            <div className={classes.eachService}>
                                <div>Bedroom</div>
                                <div>x3</div>
                                <div>$90</div>
                            </div>
                            <div className={classes.eachService}>
                                <div>Bedroom</div>
                                <div>x3</div>
                                <div>$90</div>
                            </div>
                        </div>
                        <div className={classes.APFeeContainer}>

                            <div className={classes.subHeading}>Appointment Fee</div>
                            <div className={classes.secondSubHeading}>Extra Service</div>
                            <div className={classes.eachService}>
                                <div>Bedroom</div>
                                <div>x3</div>
                                <div>$90</div>
                            </div>
                            <div className={classes.eachService}>
                                <div>Bedroom</div>
                                <div>x3</div>
                                <div>$90</div>
                            </div>   <div className={classes.eachService}>
                                <div>Bedroom</div>
                                <div>x3</div>
                                <div>$90</div>
                            </div>

                        </div>

                        <div className={classes.lastContainers}>
                            <div className={classes.subHeading}>Sub Total</div>
                            <div className={classes.subHeading}>$280</div>
                        </div>
                        <div className={classes.lastContainers}>
                            <div className={classes.subHeading}>Tax(+)15%</div>
                            <div className={classes.subHeading}>$42</div>
                        </div>
                        <div className={classes.lastContainers}>
                            <div className={classes.subHeading}>Total</div>
                            <div className={classes.subHeading}>$280</div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default SellerView