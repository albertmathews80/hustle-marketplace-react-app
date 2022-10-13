import classes from './UnapprovedServices.module.css'
import Heading from '../common/Heading';
import wallPainting from "../../../images/Image204wallPainting.png";
import electrician from "../../../images/Image205electrician.png";

const UnapprovedServices = () => {
  return (
    <div className={classes.container}>
      <Heading heading="Un-approved Services" />
      <div className={classes.searchContainer}>
        <form className={classes.form}>
          <input type="search" placeholder="Seacrh" />
          <button type="submit"></button>
        </form>
      </div>
      <div className={classes.main}>
        <div className={classes.headingContainer}>
          <div className={classes.col1}>Media</div>
          <div className={classes.col}>Title</div>
          <div className={classes.col}>Username</div>
          <div className={classes.colLast}>Action</div>
        </div>

        <div className={classes.rowContainer}>
          <div className={classes.col1}>
            <img src={electrician} alt="" />
          </div>
          <div className={classes.col}>Our Expert Electrician</div>
          <div className={classes.col}>James</div>
          <div className={classes.colLast}>
            <select name="" className={classes.select} id="">
              <option value="">Select</option>
              <option value="approved">View</option>
              <option value="">Edit</option>
              <option value="">Delete</option>
            </select>
          </div>
        </div>

        <div className={classes.rowContainer}>
          <div className={classes.col1}>
            <img src={wallPainting} alt="" />
          </div>
          <div className={classes.col}>Sketch</div>
          <div className={classes.col}>Painter</div>
          <div className={classes.colLast}>
            <select name="" className={classes.select} id="">
              <option value="">Select</option>
              <option value={"unapproved"}>View</option>
              <option value="">Edit</option>
              <option value="">Delete</option>
            </select>
          </div>
        </div>

        <div className={classes.rowContainer}>
          <div className={classes.col1}>
            <img src={wallPainting} alt="" />
          </div>
          <div className={classes.col}>Sketch</div>
          <div className={classes.col}>Painter</div>
          <div className={classes.colLast}>
            <select name="" className={classes.select} id="">
              <option value="">Select</option>
              <option value="deleted">View</option>
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
}

export default UnapprovedServices