import classes from './Offers.module.css'
import { useState } from 'react';
import ActiveOffers from './ActiveOffers';
import PendingApproval from "./PendingApproval";
import Draft from "./Draft";
import Denied from "./Denied";
import Paused from "./Paused";

const Offers = ({ setShowScreen }) => {
  const [offerScreen, setOfferScreen] = useState("Active");
  

  return (
    <div className={classes.container}>
      <div className={classes.heading}>Offers</div>
      <div className={classes.buttonContainer}>
        <div className={classes.leftButtons}>
          <div
            className={`${classes.offerButton} ${
              offerScreen === "Active" ? classes.clicked : classes.unclicked
            }`}
            onClick={() => setOfferScreen("Active")}
          >
            Active
          </div>
          <div
            className={`${classes.offerButton} ${
              offerScreen === "Pending Approval"
                ? classes.clicked
                : classes.unclicked
            }`}
            onClick={() => setOfferScreen("Pending Approval")}
          >
            Pending Approval
          </div>
          <div
            className={`${classes.offerButton} ${
              offerScreen === "DRAFT" ? classes.clicked : classes.unclicked
            }`}
            onClick={() => setOfferScreen("DRAFT")}
          >
            DRAFT
          </div>

          <div
            className={`${classes.offerButton} ${
              offerScreen === "DENIED" ? classes.clicked : classes.unclicked
            }`}
            onClick={() => setOfferScreen("DENIED")}
          >
            DENIED
          </div>
          <div
            className={`${classes.offerButton} ${
              offerScreen === "PAUSED"
                ? classes.clicked
                : classes.unclicked
            }`}
            onClick={() => setOfferScreen("PAUSED")}
          >
            PAUSED
          </div>
        </div>
        <div className={classes.right}>
          <div
            className={classes.btn}
            onClick={() => setShowScreen("createNewOffer")}
          >
            CREATE NEW OFFER
          </div>
        </div>
      </div>
      <div className={classes.offerContainer}>
        {offerScreen === "Active" && <ActiveOffers />}
        {offerScreen === "Pending Approval" && <PendingApproval />}
        {offerScreen === "DRAFT" && <Draft />}
        {offerScreen === "DENIED" && <Denied />}
        {offerScreen === "PAUSED" && <Paused />}
      </div>
    </div>
  );
};

export default Offers