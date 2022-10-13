import { useState } from "react";
import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import classes from "./FAQ.module.css";

const FAQ = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  return (
    <div className={classes.container}>
      <HeadingSection
        mainTitle="Home"
        subTitle="FAQ"
        heading="Frequently Asked Quesions FAQ"
      />

      <div className={classes.faqContainer}>
        <div className={classes.innerContainer}>
          <div className={classes.accordian}>
            <div style={show ? { display: 'flex', padding: '15px', backgroundColor: 'black', color: '#fff' } : { display: 'flex', padding: '15px' }}>
              <div className={classes.faqQuestion}>What’s your very first memory?</div>
              <div className={classes.sign} onClick={() => { setShow(!show) }}>{!show ? '+' : '-'}</div>
            </div>
            {show &&
              <div className={classes.answer}>
                Sportsman delighted improving dashwoods of instanty happiness six.
                How now amounted absolute not mistaken way pleasant whatever.At
                these still no dried fully stood thing. Rapid it on hours hill it seven years
              </div>
            }
          </div>
          <div className={classes.accordian}>
            <div style={show2 ? { display: 'flex', padding: '15px', backgroundColor: 'black', color: '#fff' } : { display: 'flex', padding: '15px' }}>
              <div className={classes.faqQuestion}>What’s your very first memory?</div>
              <div className={classes.sign} onClick={() => { setShow2(!show2) }}>{!show2 ? '+' : '-'}</div>
            </div>
            {show2 &&
              <div className={classes.answer}>
                Sportsman delighted improving dashwoods of instanty happiness six.
                How now amounted absolute not mistaken way pleasant whatever.At
                these still no dried fully stood thing. Rapid it on hours hill it seven years
              </div>
            }
          </div>
          <div className={classes.accordian}>
            <div style={show3 ? { display: 'flex', padding: '15px', backgroundColor: 'black', color: '#fff' } : { display: 'flex', padding: '15px' }}>
              <div className={classes.faqQuestion}>What’s your very first memory?</div>
              <div className={classes.sign} onClick={() => { setShow3(!show3) }}>{!show3 ? '+' : '-'}</div>
            </div>
            {show3 &&
              <div className={classes.answer}>
                Sportsman delighted improving dashwoods of instanty happiness six.
                How now amounted absolute not mistaken way pleasant whatever.At
                these still no dried fully stood thing. Rapid it on hours hill it seven years
              </div>
            }
          </div>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.accordian}>
            <div style={show4 ? { display: 'flex', padding: '15px', backgroundColor: 'black', color: '#fff' } : { display: 'flex', padding: '15px' }}>
              <div className={classes.faqQuestion}>What’s your very first memory?</div>
              <div className={classes.sign} onClick={() => { setShow4(!show4) }}>{!show4 ? '+' : '-'}</div>
            </div>
            {show4 &&
              <div className={classes.answer}>
                Sportsman delighted improving dashwoods of instanty happiness six.
                How now amounted absolute not mistaken way pleasant whatever.At
                these still no dried fully stood thing. Rapid it on hours hill it seven years
              </div>
            }
          </div>
          <div className={classes.accordian}>
            <div style={show5 ? { display: 'flex', padding: '15px', backgroundColor: 'black', color: '#fff' } : { display: 'flex', padding: '15px' }}>
              <div className={classes.faqQuestion}>What’s your very first memory?</div>
              <div className={classes.sign} onClick={() => { setShow5(!show5) }}>{!show5 ? '+' : '-'}</div>
            </div>
            {show5 &&
              <div className={classes.answer}>
                Sportsman delighted improving dashwoods of instanty happiness six.
                How now amounted absolute not mistaken way pleasant whatever.At
                these still no dried fully stood thing. Rapid it on hours hill it seven years
              </div>
            }
          </div>
          <div className={classes.accordian}>
            <div style={show6 ? { display: 'flex', padding: '15px', backgroundColor: 'black', color: '#fff' } : { display: 'flex', padding: '15px' }}>
              <div className={classes.faqQuestion}>What’s your very first memory?</div>
              <div className={classes.sign} onClick={() => { setShow6(!show6) }}>{!show6 ? '+' : '-'}</div>
            </div>
            {show6 &&
              <div className={classes.answer}>
                Sportsman delighted improving dashwoods of instanty happiness six.
                How now amounted absolute not mistaken way pleasant whatever.At
                these still no dried fully stood thing. Rapid it on hours hill it seven years
              </div>
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
