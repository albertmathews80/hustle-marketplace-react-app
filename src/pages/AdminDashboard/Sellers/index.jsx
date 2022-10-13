import classes from "./Sellers.module.css";
import Heading from "../common/Heading";
import profile from "../../../images/Image206dp.png";

const Sellers = () => {
  return (
    <div className={classes.container}>
      <Heading heading="Sellers" />
      <div className={classes.searchContainer}>
        <form className={classes.form}>
          <input type="search" placeholder="Seacrh" />
          <button type="submit"></button>
        </form>
      </div>
      <div className={classes.main}>
        <div className={classes.headingContainer}>
          <div className={classes.col1}>Profile</div>
          <div className={classes.col}>Email</div>
          <div className={classes.colLast}>Action</div>
        </div>
        <div className={classes.rowContainer}>
          <div className={classes.col1}>
            <img src={profile} alt="" /> &nbsp; Harrison
          </div>
          <div className={classes.col}>harisson@example.com</div>
          <div className={classes.colLast}>
            <select name="" className={classes.select} id="">
              <option value="">Select</option>
              <option value="">View</option>
              <option value="">Edit</option>
              <option value="">Delete</option>
            </select>
          </div>
        </div>
        <div className={classes.rowContainer}>
          <div className={classes.col1}>
            <img src={profile} alt="" /> &nbsp; Harrison
          </div>
          <div className={classes.col}>harisson@example.com</div>
          <div className={classes.colLast}>
            <select name="" className={classes.select} id="">
              <option value="">Select</option>
              <option value="">View</option>
              <option value="">Edit</option>
              <option value="">Delete</option>
            </select>
          </div>
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
  );
};

export default Sellers;
