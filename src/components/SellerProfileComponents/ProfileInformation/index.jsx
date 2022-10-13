import ProfileHeader from '../ProfileHeader'
import classes from './ProfileInformation.module.css'

const ProfileInformation = () => {
    return (
        <div className={classes.main}>
            <ProfileHeader heading='Profile Information' />
            <div className={classes.data}>
                <div className={classes.left}>
                    <div className={classes.info}>
                        <div className={classes.infoLeft}>
                            <div >Name</div>
                            <div >Email</div>
                            <div >Phone</div>
                            <div >City</div>
                        </div>
                        <div className={classes.infoRight}>
                            <div >{"John Doe"}</div>
                            <div >{"customer@gmail.com"}</div>
                            <div >{"011-2234567890"}</div>
                            <div >{"New York"}</div>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.info}>
                        <div className={classes.infoLeft}>
                            <div >Area</div>
                            <div >Post Code</div>
                            <div >Address</div>
                        </div>
                        <div className={classes.infoRight}>
                            <div >New York</div>
                            <div >1122</div>
                            <div >2608 Ritter Avenue Livonia, MI 4815</div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileInformation