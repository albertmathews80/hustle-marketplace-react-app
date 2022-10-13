import classes from './Profile.module.css'
import userProfilePicture from '../../images/image 9.png'
import star from '../../images/Star4.png'
import star2 from '../../images/Star 22.png'
import tick from '../../images/Vector 36.png'
import CardsCarousel from '../../components/ProfileComponents/CardsCarousel'

const Profile = () => {
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
            <div className={`${classes.text} ${classes.smaller}`}>Orders Completed</div>
          </div>
          <div className={classes.blackContainer}>
            <div className={classes.icon}>
              <img src={star2} alt="" />
            </div>
            <div className={classes.numbers}>95%</div>
            <div className={classes.text}>Seller Rating</div>
          </div>
        </div>
      </div>

      <div className={classes.services}>
        <div className={classes.heading}>Services Of this Seller </div>
        <CardsCarousel />
      </div>
      <div className={classes.reviews}>
        <div className={classes.heading}>Reviews as Seller </div>
        <div className={classes.reviewContainer}>
          <div className={classes.img}>
            <img src={userProfilePicture} alt="" />
          </div>
          <div className={classes.review}>
            <div className={classes.ratingName}>John Cena</div>
            <div className={classes.rating}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className={classes.ratingtext}>It is a long established fact a reader will be distracted by thereadableIt is along established fact a reader will be distracted by there a bleIt is a lo
            </div>
            <div className={classes.ratingDate}>Feb 15, 2022</div>
          </div>
        </div>
        <div className={classes.reviewContainer}>
          <div className={classes.img}>
            <img src={userProfilePicture} alt="" />
          </div>
          <div className={classes.review}>
            <div className={classes.ratingName}>John Cena</div>
            <div className={classes.rating}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className={classes.ratingtext}>It is a long established fact a reader will be distracted by thereadableIt is along established fact a reader will be distracted by there a bleIt is a lo
            </div>
            <div className={classes.ratingDate}>Feb 15, 2022</div>
          </div>
        </div>
        <div className={classes.reviewContainer}>
          <div className={classes.img}>
            <img src={userProfilePicture} alt="" />
          </div>
          <div className={classes.review}>
            <div className={classes.ratingName}>John Cena</div>
            <div className={classes.rating}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className={classes.ratingtext}>It is a long established fact a reader will be distracted by thereadableIt is along established fact a reader will be distracted by there a bleIt is a lo
            </div>
            <div className={classes.ratingDate}>Feb 15, 2022</div>
          </div>
        </div>
        <div className={classes.reviewContainer}>
          <div className={classes.img}>
            <img src={userProfilePicture} alt="" />
          </div>
          <div className={classes.review}>
            <div className={classes.ratingName}>John Cena</div>
            <div className={classes.rating}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className={classes.ratingtext}>It is a long established fact a reader will be distracted by thereadableIt is along established fact a reader will be distracted by there a bleIt is a lo
            </div>
            <div className={classes.ratingDate}>Feb 15, 2022</div>
          </div>
        </div>
        <div className={classes.reviewContainer}>
          <div className={classes.img}>
            <img src={userProfilePicture} alt="" />
          </div>
          <div className={classes.review}>
            <div className={classes.ratingName}>John Cena</div>
            <div className={classes.rating}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className={classes.ratingtext}>It is a long established fact a reader will be distracted by thereadableIt is along established fact a reader will be distracted by there a bleIt is a lo
            </div>
            <div className={classes.ratingDate}>Feb 15, 2022</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

{/* <div className={classes.orders}>
<div className={classes.blackContainer}>
  <div className={classes.icon}>
    <img src={tick} alt="" />
  </div>
  <div className={classes.numbers}>220</div>
  <div className={classes.text}>Orders Completed</div>
</div>
<div className={classes.blackContainer}>
  <div className={classes.icon}>
    <img src={star2} alt="" />
  </div>
  <div className={classes.numbers}>95%</div>
  <div className={classes.text}>Seller Rating</div>
</div>
</div> */}