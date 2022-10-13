import classes from "./Notifications.module.css";
import cross from "../../../images/Icon123cross.png";

const Notifications = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Notifications</div>
      <div className={classes.notificationContainer}>
        <div className={classes.notification}>
          <div className={classes.textContainer}>
            <span>
              You spent 3 connects on the availability badge from September 19
              to September 25. You have 0 connects left.
            </span>
            <div>3rd October</div>
          </div>
          <div className={classes.buttonContainer}>
            <img src={cross} alt="" />
          </div>
        </div>
        <div className={classes.notification}>
          <div className={classes.textContainer}>
            <span>
              You spent 3 connects on the availability badge from September 19
              to September 25. You have 0 connects left.
            </span>
            <div>3rd October</div>
          </div>
          <div className={classes.buttonContainer}>
            <img src={cross} alt="" />
          </div>
        </div>
        <div className={classes.notification}>
          <div className={classes.textContainer}>
            <span>
              You spent 3 connects on the availability badge from September 19
              to September 25. You have 0 connects left.
            </span>
            <div>3rd October</div>
          </div>
          <div className={classes.buttonContainer}>
            <img src={cross} alt="" />
          </div>
        </div>
        <div className={classes.notification}>
          <div className={classes.textContainer}>
            <span>
              You spent 3 connects on the availability badge from September 19
              to September 25. You have 0 connects left.
            </span>
            <div>3rd October</div>
          </div>
          <div className={classes.buttonContainer}>
            <img src={cross} alt="" />
          </div>
        </div>
        <div className={classes.notification}>
          <div className={classes.textContainer}>
            <span>
              You spent 3 connects on the availability badge from September 19
              to September 25. You have 0 connects left.
            </span>
            <div>3rd October</div>
          </div>
          <div className={classes.buttonContainer}>
            <img src={cross} alt="" />
          </div>
        </div>
        <div className={classes.pagination}>
          <button>&lt;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
