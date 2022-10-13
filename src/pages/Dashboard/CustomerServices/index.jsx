import React, { useState } from "react";
import classes from "./CustomerServices.module.css";
import eyeIcon from "./../../../images/eyeIcon.png";
import share from "./../../../images/share.png";
import edit from "./../../../images/Vector-1.png";
import deleteIcon from "./../../../images/deleteIcon.png";
import reloadIcon from "./../../../images/Group 134.png";
import correctIcon from "./../../../images/Group 297.png";
import cancelIcon from "./../../../images/Group 296.png";
import Image23 from "./../../../images/image 23.png";
import movingSofa from "./../../../images/movingSofa.png";
import Image27 from "./../../../images/image 27.png";
import star from "./../../../images/Star 18.png";
import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";
// import orderRequestImg2 from "./../../../images/orderRequestImg2.png";

function CustomerServices({ setShowScreen }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>Customer Services</h2>
        <button onClick={() => setShowScreen("editservices")}>
          Edit Service
        </button>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.leftSideWrap}>
            <img src={Image23} alt="" className={classes.leftImg} />
            <div className={classes.leftSide}>
              <div className={classes.leftSideHeading}>
                Painting & Renovation Service
              </div>
              <div className={classes.leftSidePara}>
                <img src={star} alt="" />
                <span>4.9 (231)</span>
              </div>
              <div className={classes.row}>
                <div className={classes.leftSideBtn}>
                  <img src={reloadIcon} alt="" />
                  <div className={classes.text}>
                    <h5>26</h5>
                    <p>in Queue</p>
                  </div>
                </div>
                <div className={classes.leftSideBtn}>
                  <img src={correctIcon} alt="" />
                  <div className={classes.text}>
                    <h5>1240</h5>
                    <p>Completed</p>
                  </div>
                </div>
                <div className={classes.leftSideBtn}>
                  <img src={cancelIcon} alt="" />
                  <div className={classes.text}>
                    <h5>109</h5>
                    <p>Cancelled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.middleSide}>
            <div className={classes.middleSideHeading}>Starting From:</div>
            <div className={classes.middleSidePara}>$80.00</div>
          </div>
          <div className={classes.middleSide}>
            <div className={classes.middleSideHeading}>On/Off Service:</div>
            <div className={classes.middleSidePara}>
              <DragSwitch
                checked={checked}
                onChange={(e) => {
                  setChecked(e);
                }}
              />
            </div>
          </div>

          {/* <div className={classes.inputWrap}>
              <input type="checkbox" />
              <div>Cash</div>
            </div> */}

          <div className={classes.rightSide}>
            {/* <div className={classes.rightSideBtn}>Accept Order</div> */}
            <div className={classes.rightSideIconWrap}>
              <img src={edit} alt="" />
              <img src={deleteIcon} alt="" className={classes.image} />
              <img src={share} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.leftSideWrap}>
            <img src={movingSofa} alt="" className={classes.leftImg} />
            <div className={classes.leftSide}>
              <div className={classes.leftSideHeading}>
                Painting & Renovation Service
              </div>
              <div className={classes.leftSidePara}>
                <img src={star} alt="" />
                <span>4.9 (231)</span>
              </div>
              <div className={classes.row}>
                <div className={classes.leftSideBtn}>
                  <img src={reloadIcon} alt="" />
                  <div className={classes.text}>
                    <h5>26</h5>
                    <p>in Queue</p>
                  </div>
                </div>
                <div className={classes.leftSideBtn}>
                  <img src={correctIcon} alt="" />
                  <div className={classes.text}>
                    <h5>1240</h5>
                    <p>Completed</p>
                  </div>
                </div>
                <div className={classes.leftSideBtn}>
                  <img src={cancelIcon} alt="" />
                  <div className={classes.text}>
                    <h5>109</h5>
                    <p>Cancelled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.middleSide}>
            <div className={classes.middleSideHeading}>Starting From:</div>
            <div className={classes.middleSidePara}>$80.00</div>
            {/* <div className={classes.inputWrap}>
              <input type="checkbox" />
              <div>Cash</div>
            </div> */}
          </div>
          <div className={classes.middleSide}>
            <div className={classes.middleSideHeading}>On/Off Service:</div>
            <div className={classes.middleSidePara}>
              <DragSwitch
                checked={checked}
                onChange={(e) => {
                  setChecked(e);
                }}
              />
            </div>
          </div>
          <div className={classes.rightSide}>
            {/* <div className={classes.rightSideBtn}>Accept Order</div> */}
            <div className={classes.rightSideIconWrap}>
              <img src={edit} alt="" />
              <img src={deleteIcon} alt="" className={classes.image} />
              <img src={share} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.leftSideWrap}>
            <img src={Image27} alt="" className={classes.leftImg} />
            <div className={classes.leftSide}>
              <div className={classes.leftSideHeading}>
                Painting & Renovation Service
              </div>
              <div className={classes.leftSidePara}>
                <img src={star} alt="" />
                <span>4.9 (231)</span>
              </div>
              <div className={classes.row}>
                <div className={classes.leftSideBtn}>
                  <img src={reloadIcon} alt="" />
                  <div className={classes.text}>
                    <h5>26</h5>
                    <p>in Queue</p>
                  </div>
                </div>
                <div className={classes.leftSideBtn}>
                  <img src={correctIcon} alt="" />
                  <div className={classes.text}>
                    <h5>1240</h5>
                    <p>Completed</p>
                  </div>
                </div>
                <div className={classes.leftSideBtn}>
                  <img src={cancelIcon} alt="" />
                  <div className={classes.text}>
                    <h5>109</h5>
                    <p>Cancelled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.middleSide}>
            <div className={classes.middleSideHeading}>Starting From:</div>
            <div className={classes.middleSidePara}>$80.00</div>
            {/* <div className={classes.inputWrap}>
              <input type="checkbox" />
              <div>Cash</div>
            </div> */}
          </div>
          <div className={classes.middleSide}>
            <div className={classes.middleSideHeading}>On/Off Service:</div>
            <div className={classes.middleSidePara}>
              <DragSwitch
                checked={checked}
                onChange={(e) => {
                  setChecked(e);
                }}
              />
            </div>
          </div>
          <div className={classes.rightSide}>
            {/* <div className={classes.rightSideBtn}>Accept Order</div> */}
            <div className={classes.rightSideIconWrap}>
              <img src={edit} alt="" />
              <img src={deleteIcon} alt="" className={classes.image} />
              <img src={share} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerServices;
