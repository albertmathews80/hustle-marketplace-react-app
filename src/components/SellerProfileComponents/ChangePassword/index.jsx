import ProfileHeader from '../ProfileHeader'
import classes from './ChangePassword.module.css'

const ChangePassword = () => {
    return (
        <div className={classes.main}>
            <ProfileHeader heading='Password Change' />
            <div className={classes.formContainer}>
                <form>
                    <div className={classes.current}>
                        <div className={classes.label}>
                            Current Password*
                        </div>
                        <div className={classes.input}>
                            <input type="password" placeholder='Current Password' />
                        </div>
                    </div>
                    <div className={classes.full}>
                        <div className={classes.half}>
                            <div className={classes.label}>
                                New Password*
                            </div>
                            <div className={classes.input}>
                                <input type="password" placeholder='New Password' />
                            </div>
                        </div>
                        <div className={classes.half}>
                            <div className={classes.label}>
                                Confirm Password*
                            </div>
                            <div className={classes.input}>
                                <input type="password" placeholder='Confirm Password' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className={classes.btnContainer}>
                <button className={classes.btn}>Update Password</button>
            </div>
        </div>
    )
}

export default ChangePassword