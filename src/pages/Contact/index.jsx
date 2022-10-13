import HeadingSection from "./../../components/servicesComponents/HeadingSection/HeadingSection";
import CALL1IMAGE from "./../../images/call 1.png";
import EMAIL1IMAGE from "./../../images/email 1.png";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <HeadingSection mainTitle="Home" subTitle="Contact" heading="Contact" />

      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={CALL1IMAGE} alt={CALL1IMAGE} />
          <p>call us</p>
          <div className={styles.sub_text}>
            <span>111 222 333 4</span>
            <span>111 222 333 4</span>
          </div>
        </div>
        <div className={styles.card}>
          <img src={EMAIL1IMAGE} alt={EMAIL1IMAGE} />
          <p>mail address</p>
          <div className={styles.sub_text}>
            <span>info@mail.com</span>
            <span>support@mail.com</span>
          </div>
        </div>
        <div className={styles.card}>
          <img src={CALL1IMAGE} alt={CALL1IMAGE} />
          <p>support time</p>
          <div className={styles.sub_text}>
            <span>9:00 AM to 6:00 PM</span>
            <span>Monday to Saturday</span>
          </div>
        </div>
      </div>

      <div className={styles.get_in_touch}>
        <div className={styles.heading}>
          <h1>Get in Touch</h1>
        </div>
        <div className={styles.form}>
          <form>
            <div className={styles.row}>
              <div className={styles.form_control}>
                <label htmlFor="name">
                  Your Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type Your Name"
                />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">
                  Email Address <sup>*</sup>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type Your Email Address"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.form_control}>
                <label htmlFor="contact">
                  Contact Number <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Type Your Contact Number"
                />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="">
                  Address <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Type Your Address"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.form_control}>
                <label htmlFor="comments">
                  Comments <sup>*</sup>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  cols="30"
                  rows="10"
                  placeholder="Post Comments"
                ></textarea>
              </div>
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
