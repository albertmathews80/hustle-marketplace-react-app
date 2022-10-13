import classes from "./AdminDashboard.module.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardMain from "./DashboardMain";
import Roles from "./Roles";
import Users from "./Users";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import Services from "./Services";
import Buyers from "./Buyers";
import Sellers from "./Sellers";
import ApprovedServices from "./ApprovedServices";
import UnapprovedServices from "./UnapprovedServices";

const AdminDashboard = () => {
  const [showScreen, setShowScreen] = useState("dashboardmain");
  return (
    <div className={classes.container}>
      <div className={classes.SidebarStyle}>
        <Sidebar setShowScreen={setShowScreen} />
      </div>
      <div className={classes.mainScreen}>
        {showScreen === "dashboardmain" && <DashboardMain />}
        {showScreen === "roles" && <Roles setShowScreen={setShowScreen} />}
        {showScreen === "users" && <Users />}
        {showScreen === "categories" && <Categories />}
        {showScreen === "subCategories" && <SubCategories />}
        {showScreen === "services" && (
          <Services setShowScreen={setShowScreen} />
          )}
          {showScreen === "approved" && <ApprovedServices />}
          {showScreen === "unapproved" && <UnapprovedServices />}
        {showScreen === "Buyer" && <Buyers />}
        {showScreen === "Seller" && <Sellers />}
      </div>
    </div>
  );
};

export default AdminDashboard;
