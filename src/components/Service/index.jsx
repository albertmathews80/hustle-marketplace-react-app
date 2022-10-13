import { Link } from "react-router-dom";
import STARIMAGE from "./../../images/Star1.png";
import styles from "./Service.module.css";

const Service = ({
  cardImage,
  userImage,
  userName,
  rating,
  totalCount,
  title,
  shortDescription,
  price,
  slug,
}) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card_image}>
        <img src={cardImage} alt={cardImage} />
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_profile}>
          <div className={styles.card_profile_inner}>
            <img src={userImage} alt={userImage} />
            <span>{userName}</span>
          </div>
          <div className={styles.star}>
            <img src={STARIMAGE} alt={STARIMAGE} />
            <span>
              {rating} ({totalCount})
            </span>
          </div>
        </div>
        <div className={styles.card_heading}>
          <h3>{title}</h3>
          <p>{shortDescription}</p>
        </div>
        <div className={styles.card_price}>
          <span>Starting at</span>
          <strong>${price}</strong>
        </div>
        <Link to={`services/${slug}`}>Book Appointment</Link>
      </div>
    </div>
  );
};

export default Service;
