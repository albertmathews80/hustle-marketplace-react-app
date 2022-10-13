import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar1 from "./../../../images/avatar1.png";
import dashboard1 from "./../../../images/dashboard1.png";
import earnings from "./../../../images/earnings2.png";
import help from "./../../../images/help1.png";
import logo from "./../../../images/Hustle-logo.png";
import logout1 from "./../../../images/logout1.png";
import notifications from "./../../../images/Notifications.png";
import offers from "./../../../images/offers1.png";
import shoppingBag from "./../../../images/shopping-bag1.png";
import speechBuuble from "./../../../images/speech-bubble1.png";
import user1 from "./../../../images/user1.png";
import visiblity from "./../../../images/visiblity.png";
import classes from "./Sidebar.module.css";

function Sidebar({ setShowScreen }) {
  const [showOnline, setShowOnline] = useState(false);

  const listData = [
    { state: "dashboardmain", icon: dashboard1, text: "Dashboard" },
    { state: "offers", icon: offers, text: "Offers" },
    { state: "orders", icon: shoppingBag, text: "Orders" },
    { state: "earnings", icon: earnings, text: "Earnings" },
    { state: "messages", icon: speechBuuble, text: "Messages" },
    { state: "help", icon: help, text: "Help" },
    { state: "logout", icon: logout1, text: "Log Out" },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.sidebarCont}>
        <div className={classes.sidebarTop}>
          <div className={classes.firstIcon}>
            <img
              onClick={() => setShowOnline(!showOnline)}
              src={visiblity}
              alt=""
            />
          </div>
          <div
            onClick={() => setShowScreen("notifications")}
            className={classes.secondIcon}
          >
            <img src={notifications} alt="" />
          </div>
        </div>

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
        {showOnline && (
          <div className={classes.visibility}>
            <div className={classes.online}>Online</div>
            <div className={classes.invisible}>Invisible</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
