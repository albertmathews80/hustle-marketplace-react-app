import classes from "./ActiveOrders.module.css";
import profile from "../../images/Image203avatar.png";
import rectangle from "../../images/Rectangle 224.png";
import questionMark from "../../images/Icon114questionmark.png";
import socialIcon1 from "../../images/socialIcon1github.png";
import socialIcon2 from "../../images/socialIcon2twitter.png";
import socialIcon3 from "../../images/socialIcon3fb.png";
import socialIcon4 from "../../images/socialIcon4stackOverflow.png";
import socialIcon5 from "../../images/socialIcon5behance.png";
import socialIcon6 from "../../images/socialIcon6V.png";

const ActiveOrders = () => {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.leftContainer}>
          <div className={classes.userContainer}>
            <div className={classes.head}>
              <div className={classes.name}>
                <div>
                  <img src={profile} alt="" />
                </div>
                <div className={classes.name}>Martin Monroe</div>
              </div>
              <div className={classes.na}>N/A</div>
            </div>

            <div className={classes.responseContainer}>
              <div className={classes.response}>
                <div>Inbox response rate</div>
                <div>
                  <img src={rectangle} alt="" />
                  &nbsp;&nbsp;100%
                </div>
              </div>
              <div className={classes.response}>
                <div>Inbox response rate</div>
                <div>N/A</div>
              </div>
              <div className={classes.response}>
                <div>Inbox response rate</div>
                <div>
                  <img src={rectangle} alt="" />
                  &nbsp;&nbsp;100%
                </div>
              </div>
              <div className={classes.response}>
                <div>Inbox response rate</div>
                <div>
                  <img src={rectangle} alt="" />
                  &nbsp;&nbsp;100%
                </div>
              </div>
              <div className={classes.response}>
                <div>Inbox response rate</div>
                <div>
                  <img src={rectangle} alt="" />
                  &nbsp;&nbsp;100%
                </div>
              </div>
            </div>
            <div className={classes.keyValue}>
              <div className={classes.key}>Earned in October</div>
              <div className={classes.value}>$0</div>
            </div>
          </div>
          <div className={classes.inboxContainer}>
            <div className={classes.keyValue}>
              <div className={classes.key}>Inbox</div>
              <div className={classes.value}>View All</div>
            </div>
          </div>
          <div className={classes.socialContainer}>
            <div className={classes.link}>
              <div>Link your social networks</div>
              <img src={questionMark} alt="" />
            </div>
            <div className={classes.socialIcons}>
              <img src={socialIcon5} alt="" />
              <img src={socialIcon1} alt="" />
              <img src={socialIcon4} alt="" />
              <img src={socialIcon3} alt="" />
              <img src={socialIcon2} alt="" />
              <img src={socialIcon6} alt="" />
            </div>
          </div>
        </div>

        <div className={classes.rightContainer}>
          <div className={classes.section1}>
            <div className={classes.orders}>
              Active orders <span> - 0 ($0)</span>
            </div>
            <div className={classes.orderRight}>Active orders (0) &nbsp; &#5167;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveOrders;
