import classes from './Paused.module.css'

const Paused = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <div className={classes.headingText}>PAUSED</div>
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
        <div className={classes.lastContainer}>No Paused gigs to show.</div>
      </div>
    </div>
  );
}

export default Paused