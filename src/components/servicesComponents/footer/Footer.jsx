import fb from "../../../images/facebook-app-symbol 1.png";
import logo from "../../../images/Hustle-logo.png";
import image22 from "../../../images/image 22.png";
import image28 from "../../../images/image 28.png";
import insta from "../../../images/instagram1.png";
import location from "../../../images/location 1.png";
import mail from "../../../images/mail 1.png";
import send from "../../../images/send.png";
import smartphone from "../../../images/smartphone 1.png";
import twitter from "../../../images/twitter 1.png";
import youtube from "../../../images/youtube1.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.half}>
          <div className={classes.list}>
            <img src={logo} alt="" />
            <p className={classes.text}>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
          <div className={classes.list}>
            <h4>Contact info</h4>
            <div className={classes.para}>
              <div className={classes.image}>
                <img src={location} alt="" />
                <p>41/1, Hilton Mall, NY City New York</p>
              </div>
              <div className={classes.image}>
                <img src={smartphone} alt="" />
                <p>+012-78901231</p>
              </div>
              <div className={classes.image}>
                <img src={mail} alt="" />
                <p>help@gmail.com</p>
              </div>
            </div>
            <div className={classes.social}>
              <img src={fb} alt="" />
              <img src={twitter} alt="" />
              <img src={insta} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.half}>
          <div className={classes.list}>
            <h4>Recent News</h4>
            <div className={classes.para}>
              <div className={classes.figure}>
                <img src={image22} alt="" />
                <p>It is a long established fact a reader will be distracted</p>
              </div>
              <div className={classes.figure}>
                <img src={image28} alt="" />
                <p>It is a long established fact a reader will be distracted</p>
              </div>
            </div>
          </div>

          <div className={classes.list}>
            <h4>Subscribe Newsletter</h4>
            <div className={classes.subs}>
              <p>It is a long established fact a reader will be distracted</p>
              <div className={classes.emailBar}>
                <input type="text" placeholder="Email Address" />
                <img src={send} alt="" style={{ border: "1px solid black" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copy}>
        <div>
          <p>Privacy | Terms & Conditions</p>
        </div>
        <div>
          <p>All copyright @ 2022 Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
