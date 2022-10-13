import classes from "./SellerDashboard.module.css";
import Sidebar from "./Sidebar";
import DashboardMain from "./DashboardMain";
import { useState } from "react";
import Notifications from "./Notifications";
import Offers from "./Offers";
import CreateNewOffer from "./CreateNewOffer";

const SellerDashboard = () => {
  const [showScreen, setShowScreen] = useState("dashboardmain");
  return (
    <div className={classes.container}>
      <div className={classes.SidebarStyle}>
        <Sidebar setShowScreen={setShowScreen} />
      </div>
      <div className={classes.mainScreen}>
        {showScreen === "dashboardmain" && <DashboardMain />}
        {showScreen === "notifications" && <Notifications />}
        {showScreen === "offers" && <Offers setShowScreen={setShowScreen} />}
        {showScreen === "createNewOffer" && <CreateNewOffer />}
      </div>
    </div>
  );
};

export default SellerDashboard;
