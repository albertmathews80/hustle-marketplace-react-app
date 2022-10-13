import { useCounterContext } from "./../../components/hooks/useCounterContext";
import Section1 from "./../../components/servicesComponents/section1/Section1";
import ServiceHeader from "./../../components/servicesComponents/serviceHeader";
import check from "./../../images/check.png";
import people1 from "./../../images/people1.png";
import star from "./../../images/Star2.png";
import classes from "./ServiceList4.module.css";

const serviceOrder = [
  {
    id: 1,
    title: "Kitchen Cleaning ",
    price: 25,
    count: 3,
    totalCount: 50,
  },
  {
    id: 2,
    title: "Kitchen Cleaning ",
    price: 25,
    count: 3,
    totalCount: 50,
  },
  {
    id: 3,
    title: "Kitchen Cleaning ",
    price: 25,
    count: 3,
    totalCount: 50,
  },
  {
    id: 4,
    title: "Kitchen Cleaning ",
    price: 25,
    count: 3,
    totalCount: 50,
  },
];

const ServiceList4 = () => {
  const { setCurrentSteps } = useCounterContext();

  return (
    <div className={classes.container}>
      <Section1 />
      <div className={classes.containerWrap}>
        <div className={classes.left}>
          <ServiceHeader
            title="All Painting & Renovation Service"
            img1={people1}
            img2={star}
            rating="4.9 (231)"
          />
          <div className={classes.serviceInfo}>
            <div className={classes.serviceInfoText}>
              <h2>What’s Included</h2>
              <h4>Quantity 2x</h4>
            </div>
            <ul>
              <div>
                <li>
                  <img src={check} alt="" />
                  <span>3 Bed Room</span>
                  <span>
                    $30x<em>3</em>
                  </span>
                </li>
                {/* <a href="#">Remove</a> */}
              </div>
              <div>
                <li>
                  <img src={check} alt="" />
                  <span>3 Bed Room</span>
                  <span>
                    $20x<em>2</em>
                  </span>
                </li>
                {/* <a href="#">Remove</a> */}
              </div>
            </ul>
          </div>
          <div className={classes.cardsContainer}>
            <h2>Add ons</h2>
            <div className={classes.cardWrap}>
              {serviceOrder.map((services) => {
                return (
                  <div className={classes.cards} key={services.id}>
                    <div>
                      <input type="checkbox" />
                      <h4>{services.title}</h4>
                    </div>
                    <div>
                      <span>
                        ${services.price}x<em>{services.count}</em>
                      </span>
                      <b>${services.totalCount}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className={classes.textContainer}>
                        <h2>Benifits of the Package:</h2>
                        <div>
                            <img src={dots} alt="" /> <span>Lorem ipsum dolor sit amet, cionsectue disapctinnb so lep</span>
                        </div>
                        <div>
                            <img src={dots} alt="" /> <span>Lorem ipsum dolor sit amet, cionsectue disapctinnb so lep</span>
                        </div>
                        <div>
                            <img src={dots} alt="" /> <span>Lorem ipsum dolor sit amet, cionsectue disapctinnb so lep</span>
                        </div>
                    </div> */}
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
          </div>
          <button>Continue</button>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <button onClick={() => setCurrentSteps(0)}>PREVIOUS</button>
        <button onClick={() => setCurrentSteps(2)}>NEXT</button>
      </div>
    </div>
  );
};

export default ServiceList4;
