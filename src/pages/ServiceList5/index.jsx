import { useCounterContext } from "./../../components/hooks/useCounterContext";
import Section1 from "./../../components/servicesComponents/section1/Section1";
import ServiceHeader from "./../../components/servicesComponents/serviceHeader";
import people1 from "./../../images/ (1).png";
import star from "./../../images/Star2.png";
import Vector4 from "./../../images/Vector (4).png";
import Vector5 from "./../../images/Vector (5).png";
import Vector6 from "./../../images/Vector (6).png";
import Vector7 from "./../../images/Vector (7).png";
import Vector8 from "./../../images/Vector (8).png";
import classes from "./ServiceList5.module.css";

const ServiceList5 = () => {
  const { setCurrentSteps } = useCounterContext();

  return (
    <div className={classes.container}>
      <Section1 />
      <div className={classes.containerWrap}>
        <ServiceHeader
          title="Lorem ipsum dolor sit amet, consectetur adicpising about Aelot "
          img1={people1}
          img2={star}
          rating="4.9 (231)"
        />
        <hr />
        <div className={classes.paymentWrap}>
          <div className={classes.left}>
            <div className={classes.dateTime}>
              <div>
                Location
                <br />
                <span>Los Angeles,</span>
                <br />
                <span> California</span>
              </div>
              <div>
                Date & Time <br />
                <span>06 Feb 2022 ,</span>
                <br />
                <span>6:00PM-7:00PM</span>
              </div>
            </div>
            <div className={classes.formDetails}>
              <h2>Booking Information</h2>
              <div>
                <span>Name:</span>
                <span>Jhon Dhoe</span>
              </div>
              <div>
                <span> Email:</span>
                <span>Customer@gmail.com</span>
              </div>
              <div>
                <span>Phone:</span>
                <span>011-22345678909</span>
              </div>
              <div>
                <span>City:</span>
                <span>New York</span>
              </div>
              <div>
                <span>Address:</span>
                <span>2608 Ritter Avenue Livonia, MI 48150</span>
              </div>
              <div>
                <span>Order Note:</span>
                <span className={classes.bookingChildPara}>
                  It is a long established fact that a reader will be
                  distraction by the readable content of a page of by the
                  readable content of a page when looking ait its layout
                </span>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <h3>Booking Summery </h3>
            <div className={classes.book1}>
              <span>Appointment Package Service</span>
              <br />
              <div className={classes.list1}>
                <span> Bed Room </span>
                <span>x3</span>
                <span>$90 </span>
              </div>
              <div className={classes.list1}>
                <span> Bed Room </span>
                <span>x2</span>
                <span>$90 </span>
              </div>
              {/* <div className={classes.bill}>
                <span>Package Fee</span>
                <span>$150</span>
              </div> */}
            </div>
            <div className={classes.book1}>
              {/* <span>Extra Service</span>
              <br />
              <div className={classes.list1}>
                <span> Kitchen </span>
                <span>x3</span>
                <span>$90 </span>
              </div>
              <div className={classes.list1}>
                <span>Fridge</span>
                <span>x2</span>
                <span>$90 </span>
              </div>
              <div className={classes.list1}>
                <span>Garden </span>
                <span>x2</span>
                <span>$90 </span>
              </div>
              <div className={classes.bill}>
                <span> Subtotal </span>
                <span>$280</span>
              </div>
              <div className={classes.bill}>
                <span> Tax(+)15%</span>
                <span>$42</span>
              </div> */}
              <div className={classes.bill}>
                <span> Total </span>
                <span>$420</span>
              </div>
              <div className={classes.checkBoxes}>
                <div>
                  <input type="checkbox" />
                  <span>Cash Payment</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <div className={classes.imgContainer}>
                    <img src={Vector4} alt="" />
                    <img src={Vector5} alt="" />
                    <img src={Vector6} alt="" />
                    <img src={Vector7} alt="" />
                    <img src={Vector8} alt="" />
                  </div>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>
                    {" "}
                    I have read and agree to the website terms and conditions*{" "}
                  </span>
                </div>
              </div>
            </div>
            <button>Pay & Confirm Your Order</button>
          </div>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <button onClick={() => setCurrentSteps(3)}>PREVIOUS</button>
        <button onClick={() => setCurrentSteps(5)}>Submit</button>
      </div>
    </div>
  );
};

export default ServiceList5;
