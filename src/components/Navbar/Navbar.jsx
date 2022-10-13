import { NavLink, useLocation, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = ({ logo, ring }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={classes.navbar}>
      <div className={classes.nav}>
        <div className={classes.navLogo}>
          <img onClick={() => navigate("/")} src={logo} alt={logo} />
        </div>
        <div className={classes.navLinks}>
          <ul>
            <li>
              <NavLink
                className={location.pathname === "/" ? classes.navHome : null}
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={location.pathname === "/" ? classes.navHome : null}
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className={location.pathname === "/" ? classes.navHome : null}
                to="/services"
              >
                Services List
              </NavLink>
            </li>

            <li>
              <NavLink
                className={location.pathname === "/" ? classes.navHome : null}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                className={location.pathname === "/" ? classes.navHome : null}
                to="/others"
              >
                Others
              </NavLink>
            </li>

            <li>
              <NavLink
                className={location.pathname === "/" ? classes.navHome : null}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                className={location.pathname === "/" ? classes.navHome : null}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.navRight}>
          <img src={ring} alt="" />
          <div className={classes.profile}>
            <li>
              <NavLink
                className={
                  location.pathname === "/" ? classes.profileColor : null
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            {/* <img src={profileImage} alt="" /> */}
            {/* <span
              className={
                location.pathname === "/" ? classes.profileColor : null
              }
            >
              Martin Monroe
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
