import classes from "./Categories.module.css";
import Heading from "../common/Heading";

const Categories = () => {
  return (
    <div className={classes.container}>
      <Heading heading="Categories" />
      <div className={classes.searchContainer}>
        <form className={classes.form}>
          <input type="search" placeholder="Seacrh" />
          <button type="submit"></button>
        </form>
      </div>
      <div className={classes.main}>
        <div className={classes.headingContainer}>
          <div className={classes.col1}>Category</div>

          <div className={classes.colLast}>Action</div>
        </div>
        <div className={classes.rowContainer}>
          <div className={classes.col1}>Electrician</div>
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
          <div className={classes.col1}>Painter</div>
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

export default Categories;
