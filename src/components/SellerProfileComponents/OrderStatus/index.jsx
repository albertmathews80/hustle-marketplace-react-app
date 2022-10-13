import classes from './OrderStatus.module.css'
import ProfileHeader from '../ProfileHeader'
import lightStar from '../../../images/Star 23.png'
import eye from '../../../images/Icon107eye.png'
import print from '../../../images/Icon108print.png'

const OrderStatus = () => {
  return (
    <div className={classes.main}>
      <ProfileHeader heading='Order Status' />
      <div className={classes.container}>
        <div className={classes.orderContainer}>
          <div className={classes.left}>
            <div className={classes.orderName}>Painting & Renovation Service</div>

            <div className={classes.inner}>
              <div className={classes.innerLeft}>
                <div className={classes.amount}>$280.00</div>
                <div className={classes.date}>11 Feb, 2022-08:00pm</div>
                <div className={classes.grey}>paypal</div>

              </div>
              <div className={classes.innerRight}>
                <div className={classes.orderNumber}>Order #200124</div>
                <div className={classes.orderRating}>
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                </div>
                <div className={classes.status}>Pending</div>
              </div>
            </div>

          </div>
          <div className={classes.right}>
            <div className={classes.buttonOne}>Play Now</div>
            <div className={classes.buttonTwo}>Cancel</div>
            <div className={classes.printButtons}>
             <img src={eye} alt="" />
             <img src={print} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.orderContainer}>
          <div className={classes.left}>
            <div className={classes.orderName}>Painting & Renovation Service</div>

            <div className={classes.inner}>
              <div className={classes.innerLeft}>
                <div className={classes.amount}>$280.00</div>
                <div className={classes.date}>11 Feb, 2022-08:00pm</div>
                <div className={classes.grey}>paypal</div>

              </div>
              <div className={classes.innerRight}>
                <div className={classes.orderNumber}>Order #200124</div>
                <div className={classes.orderRating}>
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                </div>
                <div className={classes.status}>Canceled</div>
              </div>
            </div>

          </div>
          <div className={classes.right}>
            <div className={classes.buttonOne}>Re-Order</div>
            <div className={classes.printButtons}>
             <img src={eye} alt="" />
             <img src={print} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.orderContainer}>
          <div className={classes.left}>
            <div className={classes.orderName}>Painting & Renovation Service</div>

            <div className={classes.inner}>
              <div className={classes.innerLeft}>
                <div className={classes.amount}>$280.00</div>
                <div className={classes.date}>11 Feb, 2022-08:00pm</div>
                <div className={classes.grey}>paypal</div>

              </div>
              <div className={classes.innerRight}>
                <div className={classes.orderNumber}>Order #200124</div>
                <div className={classes.orderRating}>
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                  <img src={lightStar} alt="" />
                </div>
                <div className={classes.status}>Completed</div>
              </div>
            </div>

          </div>
          <div className={classes.right}>
            <div className={classes.printButtons} style={{marginTop:'20%'}}>
             <img src={eye} alt="" />
             <img src={print} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderStatus