import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import Service from "./../../components/Service";
import PEOPLE1IMAGE from "./../../images/people1.png";
import PEOPLE2IMAGE from "./../../images/people2.png";
import PEOPLE3IMAGE from "./../../images/people3.png";
import IMAGE2 from "./../../images/image2.png";
import STARIMAGE from "./../../images/Star1.png";
import styles from "./OurServices.module.css";
import { Link } from "react-router-dom";
import searchIcon from "../../images/searchIcon.png";
import searchFilter from "../../images/searchFilter.png";

const services = [
  {
    id: 1,
    cardImage: PEOPLE1IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Painting & Renovation Service",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 1,
  },
  {
    id: 2,
    cardImage: PEOPLE2IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Emergency Electrical Supports",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 2,
  },
  {
    id: 3,
    cardImage: PEOPLE3IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Hair Cut & Hair Color Service",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 3,
  },
  {
    id: 4,
    cardImage: PEOPLE1IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Painting & Renovation Service",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 4,
  },
  {
    id: 5,
    cardImage: PEOPLE2IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Emergency Electrical Supports",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 5,
  },
  {
    id: 6,
    cardImage: PEOPLE3IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Hair Cut & Hair Color Service",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 6,
  },
  {
    id: 7,
    cardImage: PEOPLE1IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Painting & Renovation Service",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 8,
  },
  {
    id: 9,
    cardImage: PEOPLE2IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Emergency Electrical Supports",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 9,
  },
  {
    id: 10,
    cardImage: PEOPLE3IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Hair Cut & Hair Color Service",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 10,
  },
  {
    id: 11,
    cardImage: PEOPLE1IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Painting & Renovation Service",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 11,
  },
  {
    id: 12,
    cardImage: PEOPLE2IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Emergency Electrical Supports",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 12,
  },
  {
    id: 13,
    cardImage: PEOPLE3IMAGE,
    userImage: IMAGE2,
    userName: "Ryan Hussain",
    rating: 4.9,
    totalCount: 231,
    title: "All Hair Cut & Hair Color Service",
    shortDescription:
      "It is a long established fact a reader will be distracted by thereadable",
    price: 80.0,
    slug: 13,
  },
];

const OurServices = () => {
  return (
    <div className={styles.container}>
      <HeadingSection
        mainTitle="Home"
        subTitle="Service List"
        heading="Our Best Services List"
      />

      {/* <div className={styles.service_container}>
        {services.map((service) => (
          <div className={styles.card_wrap} key={service.id}>
            <Service
              cardImage={service.cardImage}
              userImage={service.userImage}
              userName={service.userName}
              rating={service.rating}
              totalCount={service.totalCount}
              title={service.title}
              shortDescription={service.shortDescription}
              price={service.price}
              slug={service.slug}
            />
          </div>
        ))}
      </div> */}

      <div className={styles.cardContainer}>
        {/* <form>
          <select name="" id="">
            <option value="">Select Categories</option>
          </select>
          <select name="" id="">
            <option value="">Price Range</option>
          </select>
          <select name="" id="">
            <option value="">Ratings</option>
          </select>
          <div className={styles.sort}>
            Sort By:
            <select name="" id="">
              <option value="">$0 to $20</option>
            </select>
          </div>
        </form>
        <div className={styles.results}>
          <p>1,283 Search Result “Cleaning Service”</p>
          <p>Showing 12 of 48</p>
        </div> */}

        <div className={styles.serviceOption}>
          <div className={styles.selectDiv}>
            <select name="" id="">
              <option value="">select</option>
            </select>
          </div>
          <form className={styles.search}>
            <input type="text" />
            <img src={searchIcon} alt="" />
          </form>
          <div className={styles.filter}>
            <img src={searchFilter} alt="" />
          </div>
        </div>

        <div className={styles.cardWrap}>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE1IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/services/1/service-title">
                  All Painting & Renovation Service
                </Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$80.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE2IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/services/1/service-title">
                  {" "}
                  All Emergency Electrical Supports
                </Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$60.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE3IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/services/1/service-title">
                  All Hair Cut & Hair Color Service
                </Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$70.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
        </div>
        <div className={styles.cardWrap}>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE1IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/services/1/service-title">
                  All Painting & Renovation Service
                </Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$80.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE2IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/services/1/service-title">
                  {" "}
                  All Emergency Electrical Supports
                </Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$60.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE3IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/services/1/service-title">
                  All Hair Cut & Hair Color Service
                </Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$70.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
        </div>
        {/* <div className={styles.cardWrap}>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE1IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <h3>All Painting & Renovation Service</h3>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$80.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE2IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <h3> All Emergency Electrical Supports</h3>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$60.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE3IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <h3>All Hair Cut & Hair Color Service</h3>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$70.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
        </div>
        <div className={styles.cardWrap}>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE1IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <h3>All Painting & Renovation Service</h3>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$80.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE2IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <h3> All Emergency Electrical Supports</h3>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$60.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE3IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={IMAGE2} alt="" />
                  <span>Ryad Hussain</span>
                </div>
                <div className={styles.star}>
                  <img src={STARIMAGE} alt="" />
                  <span>4.9 (231)</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <h3>All Hair Cut & Hair Color Service</h3>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
              <div className={styles.cardPrice}>
                <span>Starting at</span>
                <strong>$70.00</strong>
              </div>
              <Link to={`/services/1`}>Book Appointment</Link>
            </div>
          </div>
        </div> */}
        <div className={styles.pagination}>
          <button>&lt;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
