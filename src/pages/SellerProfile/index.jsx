import classes from './SellerProfile.module.css'
import userProfilePicture from '../../images/image 9.png'
import star from '../../images/Star4.png'
import tick from '../../images/Vector 36.png'
import Icon101 from '../../images/Icon101.png'
import Icon102 from '../../images/Icon102.png'
import Icon103 from '../../images/Icon103.png'
import Icon104 from '../../images/Icon104.png'
import Icon105 from '../../images/Icon105.png'
import ProfileInformation from '../../components/SellerProfileComponents/ProfileInformation'
import EditProfile from '../../components/SellerProfileComponents/EditProfile'
import OrderStatus from '../../components/SellerProfileComponents/OrderStatus'
import ChangePassword from '../../components/SellerProfileComponents/ChangePassword'
import { useState } from 'react'


const SellerProfile = () => {
    const [profile, setProfile] = useState(true)
    const [edit, setEdit] = useState(false)
    const [order, setOrder] = useState(false)
    const [pass, setPass] = useState(false)

    const profileHandler = () => {
        setProfile(true)
        setEdit(false)
        setOrder(false)
        setPass(false)

    }
    const editHandler = () => {
        setProfile(false)
        setEdit(true)
        setOrder(false)
        setPass(false)
    }
    const orderHandler = () => {
        setProfile(false)
        setEdit(false)
        setOrder(true)
        setPass(false)
    }
    const passHandler = () => {
        setProfile(false)
        setEdit(false)
        setOrder(false)
        setPass(true)
    }

    const active = {
        fontSize: '21px',
        borderBottom: '2px solid Black'

    }

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
                        <div className={classes.text}>Orders</div>
                    </div>
                </div>
            </div>

            <div className={classes.main}>
                <div className={classes.navigationContainer}>
                    <div className={classes.nav}>
                        <div onClick={profileHandler} > <img src={Icon101} alt="" /> Profile</div>
                        <div onClick={editHandler} > <img src={Icon102} alt="" /> Edit Profile</div>
                        <div onClick={orderHandler}> <img src={Icon103} alt="" /> Order Status</div>
                        <div onClick={passHandler}> <img src={Icon104} alt="" /> Password Change</div>
                        <div> <img src={Icon105} alt="" /> Logout</div>
                    </div>
                </div>
                <div className={classes.rightContainer}>
                    {profile && <ProfileInformation />}
                    {edit && <EditProfile />}
                    {order && <OrderStatus />}
                    {pass && <ChangePassword />}
                </div>
            </div>

        </div>
    )
}

export default SellerProfile