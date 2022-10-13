import classes from "./Section1.module.css";

const Section1 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.containerWrap}>
        <div>
          <span className={classes.number}>1</span>
          <span className={classes.text}>Location</span>
        </div>
        <div>
          <span className={classes.number}>2</span>
          <span className={classes.text}>Service</span>
        </div>
        <div>
          <span className={classes.number}>3</span>
          <span className={classes.text}>Date & Time</span>
        </div>
        <div>
          <span className={classes.number}>4</span>
          <span className={classes.text}>Information</span>
        </div>
        <div>
          <span className={classes.number}>5</span>
          <span className={classes.text}>Confirmation</span>
        </div>
      </div>
    </div>
  );
};

export default Section1;
