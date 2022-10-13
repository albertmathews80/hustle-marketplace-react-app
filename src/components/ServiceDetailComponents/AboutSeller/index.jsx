import classes from './AboutSeller.module.css'
// import userProfilePicture from '../../images/image 9.png'
import userProfilePicture from '../../../images/image 9.png'
import star from '../../../images/Star4.png'



const AboutSeller = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sectionOne}>
        <div className={classes.user} >
          <div className={classes.userImage}>
            <img src={userProfilePicture} alt="" />
          </div>
          <div className={classes.userDetails}>
            <div className={classes.userName}>John Cena</div>
            <div className={classes.userRating}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              &nbsp;
              <span>(231)</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sectionTwo}>
        <div className={classes.first}>
          <div className={classes.left}>
            <div className={classes.each}>
              <div className={classes.key} >From </div>
              <div className={classes.value}>Bangladesh</div>
            </div>
            <div className={classes.each}>
              <div className={classes.key} >Seller Since </div>
              <div className={classes.value}>2020</div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.each}>
              <div className={classes.key} >Order Completion Rate </div>
              <div className={classes.value}>96%</div>
            </div>
            <div className={classes.each}>
              <div className={classes.key} >Order Completed </div>
              <div className={classes.value}>820</div>
            </div>
          </div>



        </div>
        <div className={classes.second}>
          <div>It is a long established fact a reader will be distracted by thereadableIt is a
            long established fact a reader will be distracted by there a bleIt is a long
            established fact a reader will be distracted by thereadable It is a long estab
            ished fact a reader will be distracted by thereadableIt is a long established
            fact a reader will be distracted by there a bleIt is a long established fact a
            reader will be distracted by thereadable</div>
        </div>
      </div>
    </div>
  )
}

export default AboutSeller