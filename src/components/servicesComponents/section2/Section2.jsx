import React from 'react'
import classes from "./Section2.module.css"

const Section2 = () => {
    return (
      // <div className={classes.container}>
      //     <div className={classes.containerWrap}>
      //         <div>
      //             <span>New York,<br />New York</span>
      //         </div>
      //         <div>
      //             <span>Los Angeles,<br />California</span>
      //         </div>
      //         <div>
      //             <span>Chicago, <br />New York</span>
      //         </div>
      //         <div>
      //             <span>Houston,<br />Texas</span>
      //         </div>
      //         <div>
      //             <span>Phoenix,<br />Arizona</span>
      //         </div>
      //     </div>
      // </div>

      <div className={classes.container}>
        <div className={classes.containerWrap}>
          <div className={classes.dropDownOption}>Berlin</div>
          <div className={classes.selectOption}>
            <select name="Add Location" id="">
              <option value="">Add Location</option>
              <option value="Berlin">Berlin</option>
            </select>
          </div>
        </div>
      </div>
    );
}

export default Section2