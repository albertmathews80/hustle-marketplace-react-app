import classes from './Review.module.css'
import userProfilePicture from '../../../images/image 9.png'
import star from '../../../images/Star4.png'

const Review = () => {
    return (
        <div className={classes.container}>
            {/* First Review */}
            <div className={classes.review}>
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
                    <div className={classes.text}>It is a long established fact a reader will be distracted by thereadableIt is along established fact a reader will be distracted by there a bleIt is a long
                        established fact a reader will be distracted by thereadable It is a long estab
                    </div>
                    <div className={classes.date}>Feb 15, 2022</div>
                </div>
            </div>
            {/* Second Review */}
            <div className={classes.review}>
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
                    <div className={classes.text}>It is a long established fact a reader will be distracted by thereadableIt is along established fact a reader will be distracted by there a bleIt is a long
                        established fact a reader will be distracted by thereadable It is a long estab
                    </div>
                    <div className={classes.date}>Feb 15, 2022</div>
                </div>
            </div>
        </div>
    )
}

export default Review