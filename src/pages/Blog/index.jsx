import { Link } from "react-router-dom";
import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import IMAGE2 from "./../../images/image2.png";
import PEOPLE1IMAGE from "./../../images/people1.png";
import PEOPLE2IMAGE from "./../../images/people2.png";
import PEOPLE3IMAGE from "./../../images/people3.png";
// import IMAGE57 from "./../../images/image 57.png";
import electricImage from "../../images/ELECTRIC.png";
import electrician from "../../images/electrician.png";
import label from "../../images/label2.png";
import movingSofa from "../../images/movingSofa.png";
import timerImage from "../../images/timer.png";
import IMAGE1 from "./../../images/ (1).png";
import IMAGE3 from "./../../images/ (3).png";
import ACOperator from "./../../images/image 62.png";
import CartonMover from "./../../images/image 65.png";
import styles from "./Blog.module.css";

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

const Blog = () => {
  return (
    <div className={styles.container}>
      <HeadingSection
        mainTitle="Home"
        subTitle="Blog"
        heading="Blog & Article"
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
        <div className={styles.cardWrap}>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={IMAGE3} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Moving</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1">All Painting & Renovation Service</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={electricImage} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Moving</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1">All Emergency Electrical Supports</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={IMAGE1} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Moving</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1">All Hair Cut & Hair Color Service</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardWrap}>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={electrician} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Cleaning</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1">All Painting & Renovation Service</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={IMAGE1} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Cleaning</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1"> All Emergency Electrical Supports</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={movingSofa} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Cleaning</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1">All Hair Cut & Hair Color Service</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardWrap}>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={ACOperator} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Electric</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1">All Painting & Renovation Service</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={CartonMover} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Salon</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1">All Emergency Electrical Supports</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardImage}>
              <img src={PEOPLE2IMAGE} alt="" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileInner}>
                  <img src={timerImage} alt="" />
                  <span>15 Feb 2022</span>
                </div>
                <div className={styles.star}>
                  <img src={label} alt="" />
                  <span>Electrical</span>
                </div>
              </div>
              <div className={styles.cardHeading}>
                <Link to="/blog/1">All Hair Cut & Hair Color Service</Link>
                <p>
                  It is a long established fact a reader will be distracted by
                  thereadable
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default Blog;
