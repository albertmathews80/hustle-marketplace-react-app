import classes from "./PendingApproval.module.css";

const PendingApproval = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <div className={classes.headingText} > PENDING APPROVAL</div>
        <div>
          <select name="" id="" className={classes.topSelect}>
            <option value="">LAST 30 DAYS</option>
            <option value="">LAST 6 MONTHS</option>
            <option value="">LAST 1 YEAR</option>
          </select>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.headingRow}>
          <div className={classes.checkBox}>
            <input type="checkbox" name="" id="" />
          </div>
          <div className={classes.secondColumn}>Offer</div>
          <div className={classes.thirdColumn}>CLICKS</div>
          <div className={classes.fourthColumn}>ORDERS</div>
          <div className={classes.fifthColumn}>ACTION</div>
        </div>
        <div className={classes.lastContainer}>No Pending gigs to show.</div>
      </div>
    </div>
  );
};

export default PendingApproval;
