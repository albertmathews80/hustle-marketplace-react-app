import classes from './EditProfile.module.css'
import profileImage from '../../../images/Image201.png'
import badgeIcon from '../../../images/Icon106badge.png'
import ProfileHeader from '../ProfileHeader'


const EditProfile = () => {

    return (
        <div className={classes.main}>
            <ProfileHeader heading='Edit Profile' />

            <div className={classes.imgContainer}>
                <img src={profileImage} alt="" />
                {/* <img className={classes.badge}  src={badgeIcon} alt="" /> */}
            </div>

            <div className={classes.formContainer}>
                <form>
                    <div className={classes.full}>
                        <div className={classes.half}>
                            <div className={classes.label}>
                                Your Name*
                            </div>
                            <div className={classes.input}>
                                <input type="text" placeholder='Type Your Name' />
                            </div>
                        </div>
                        <div className={classes.half}>
                            <div className={classes.label}>
                                Your Email*
                            </div>
                            <div className={classes.input}>
                                <input type="email" placeholder='Type Your Email' />
                            </div>
                        </div>
                    </div>

                    <div className={classes.full}>
                        <div className={classes.half}>
                            <div className={classes.label}>
                                Your Number*
                            </div>
                            <div className={classes.input}>
                                <input type="text" placeholder='Type Your Number' />
                            </div>
                        </div>
                        <div className={classes.half}>
                            <div className={classes.label}>
                                Your City*
                            </div>
                            <div className={classes.input}>
                                <input type="text" placeholder='New York' />
                            </div>
                        </div>
                    </div>

                    <div className={classes.full}>
                        <div className={classes.half}>
                            <div className={classes.label}>
                                Your Area*
                            </div>
                            <div className={classes.input}>
                                <input type="text" placeholder='Type Your Area' />
                            </div>
                        </div>
                        <div className={classes.half}>
                            <div className={classes.label}>
                                Your Code*
                            </div>
                            <div className={classes.input}>
                                <input type="number" placeholder='Type Your Post Code' />
                            </div>
                        </div>
                    </div>


                    <div className={classes.address}>
                        <div className={classes.label}>
                            Your Address*
                        </div>
                        <div className={classes.input}>
                            <input type="text" placeholder='Type Your Address' />
                        </div>
                    </div>
                </form>
            </div>

            <div className={classes.btnContainer}>
                <button className={classes.btn}>Save Changes</button>
            </div>
        </div>
    )
}

export default EditProfile