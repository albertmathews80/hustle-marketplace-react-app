import classes from "./ActiveOffers.module.css";
import wallPainting from "../../../../images/Image204wallPainting.png";

const ActiveOffers = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Active Offers</div>
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
        <div className={classes.bodyContainer}>
          <div className={classes.bodyRows}>
            <div className={classes.checkBox}>
              <input type="checkbox" name="" id="" />
            </div>
            <div className={classes.secondColumn}>
              <img src={wallPainting} alt="" />
              Do wall Painting for your House
            </div>

            <div className={classes.thirdColumn}>3</div>
            <div className={classes.fourthColumn}>0</div>
            <div className={classes.fifthColumn}>
              <div className={classes.myselect}>
                <select name="" className={classes.select}>
                  <option value=""></option>
                  <option value="">Preview</option>
                  <option value="">Edit</option>
                  <option value="">Pause</option>
                  <option value="">Share</option>
                  <option value="">Delete</option>
                </select>
              </div>
            </div>
          </div>
          <div className={classes.bodyRows}>
            <div className={classes.checkBox}>
              <input type="checkbox" name="" id="" />
            </div>
            <div className={classes.secondColumn}>
              <img src={wallPainting} alt="" />
              Do wall Painting for your House
            </div>

            <div className={classes.thirdColumn}>3</div>
            <div className={classes.fourthColumn}>0</div>
            <div className={classes.fifthColumn}>
              <div className={classes.myselect}>
                <select name="" className={classes.select}>
                  <option value=""></option>
                  <option value="">Preview</option>
                  <option value="">Edit</option>
                  <option value="">Pause</option>
                  <option value="">Share</option>
                  <option value="">Delete</option>
                </select>
              </div>
            </div>
          </div>
          <div className={classes.bodyRows}>
            <div className={classes.checkBox}>
              <input type="checkbox" name="" id="" />
            </div>
            <div className={classes.secondColumn}>
              <img src={wallPainting} alt="" />
              Do wall Painting for your House
            </div>

            <div className={classes.thirdColumn}>3</div>
            <div className={classes.fourthColumn}>0</div>
            <div className={classes.fifthColumn}>
              <div className={classes.myselect}>
                <select name="" className={classes.select}>
                  <option value=""></option>
                  <option value="">Preview</option>
                  <option value="">Edit</option>
                  <option value="">Pause</option>
                  <option value="">Share</option>
                  <option value="">Delete</option>
                </select>
              </div>
            </div>
          </div>
          <div className={classes.bodyRows}>
            <div className={classes.checkBox}>
              <input type="checkbox" name="" id="" />
            </div>
            <div className={classes.secondColumn}>
              <img src={wallPainting} alt="" />
              Do wall Painting for your House
            </div>

            <div className={classes.thirdColumn}>3</div>
            <div className={classes.fourthColumn}>0</div>
            <div className={classes.fifthColumn}>
              <div className={classes.myselect}>
                <select name="" className={classes.select}>
                  <option value=""></option>
                  <option value="">Preview</option>
                  <option value="">Edit</option>
                  <option value="">Pause</option>
                  <option value="">Share</option>
                  <option value="">Delete</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveOffers;
