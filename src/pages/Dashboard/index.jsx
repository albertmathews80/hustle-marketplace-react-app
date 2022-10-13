import classes from "./Dashboard.module.css";
import Sidebar from "./../Dashboard/Sidebar";
import DashboardMain from "./DashboardMain/index";
import ServicesComp from "./ServicesComp/ServicesComp";
import OrderPending from "./OrderPending/index";
import OrderStatus from "./OrderStatus/index";
import PayoutHistory from "./PayoutHistory/index";
import ProfileComp from "./ProfileComp";
import AccountSetting from "./AccountSetting";
import EditProfile from "./EditProfile";
import EditServices from "./EditServices";
import Review from "./Review";
import CustomerServices from "./CustomerServices";

import { useState } from "react";

const Dashboard = () => {
  const [showScreen, setShowScreen] = useState("dashboardmain");
  return (
    <div className={classes.container}>
      <div className={classes.SidebarStyle}>
        <Sidebar setShowScreen={setShowScreen} />
      </div>
      <div className={classes.mainScreen}>
        {showScreen === "dashboardmain" && <DashboardMain />}
        {showScreen === "services" && (
          <CustomerServices setShowScreen={setShowScreen} />
        )}
        {showScreen === "order-pending" && <OrderPending />}
        {showScreen === "order-status" && <OrderStatus />}
        {showScreen === "payout-history" && <PayoutHistory />}
        {showScreen === "profile" && (
          <ProfileComp setShowScreen={setShowScreen} />
        )}
        {showScreen === "settings" && <AccountSetting />}
        {showScreen === "review" && <Review />}
        {showScreen === "editprofile" && <EditProfile />}
        {showScreen === "editservices" && <EditServices />}
      </div>
    </div>
  );
};

export default Dashboard;
