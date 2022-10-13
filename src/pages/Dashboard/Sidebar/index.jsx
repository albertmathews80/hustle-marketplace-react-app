import { Link } from "react-router-dom";
import add from "./../../../images/add.png";
import avatar1 from "./../../../images/avatar1.png";
import chat1 from "./../../../images/chat1.png";
import dashboard1 from "./../../../images/dashboard1.png";
import deliverystatus from "./../../../images/delivery-status1.png";
import logo from "./../../../images/Hustle-logo.png";
import logout1 from "./../../../images/logout1.png";
import payperclick from "./../../../images/pay-per-click1.png";
import pending1 from "./../../../images/pending1.png";
import repairtool1 from "./../../../images/repair-tool1.png";
import settings1 from "./../../../images/settings1.png";
import user1 from "./../../../images/user1.png";
import classes from "./Sidebar.module.css";
 const listData = [
   { state: "dashboardmain", icon: dashboard1, text: "Dashboard" },
   { state: "services", icon: repairtool1, text: "Services" },
   { state: "order-pending", icon: pending1, text: "Order Pending" },
   { state: "order-status", icon: deliverystatus, text: "Order Status" },
   { state: "payout-history", icon: payperclick, text: "Payout History" },
   { state: "profile", icon: user1, text: "Profile" },
   { state: "settings", icon: settings1, text: "Settings" },
   { state: "review", icon: chat1, text: "Review" },
   { state: "logout", icon: logout1, text: "Log Out" },
 ];
const Sidebar = ({ setShowScreen }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebarCont}>
        

        <div className={classes.sidebarInnerTop}>
          <div>
            <img alt="" src={avatar1} />
          </div>
          <div className={classes.name}>Alex Jenin</div>
          <div className={classes.info}>Owner CleanMart</div>
        </div>
        <div className={classes.list}>
          {listData.map((item, index) => {
            return (
              <div
                className={classes.sidebarInner}
                onClick={() => setShowScreen(item.state)}
              >
                <div className={classes.sidebarListIcons}>
                  <img alt="" src={item.icon} />
                </div>
                <div className={classes.text}>{item.text}</div>
              </div>
            );
          })}
        </div>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
     
      </div>
    </div>
  );
};

export default Sidebar;

