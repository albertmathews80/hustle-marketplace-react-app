import React from "react";
import classes from "./FigureWithText.module.css";

const FigureWithText = ({ image, text, buttonText, heading, imageOnLeft }) => {
    // const [leftimage, setLeftImagge] = useState(imageOnLeft)

    return (
        <div>
            {
                imageOnLeft === true ?
                    <div className={classes.container}>
                        <div className={classes.imageContainer}>
                            <img className={classes.image} src={image} alt="" />
                        </div>
                        <div className={classes.textContainer}>
                            {heading && <div className={classes.heading}>{heading}</div>}
                            <div className={classes.text}>{text}</div>
                            <div className={classes.btnContainer}>
                                <button className={classes.btn}>{buttonText} </button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={classes.container}>
                        <div className={classes.textContainer}>
                           {heading && <div className={classes.heading}>{heading}</div>} 
                            <div className={classes.text}>{text}</div>
                            <div className={classes.btnContainer}>
                                <button className={classes.btn}>{buttonText} </button>
                            </div>
                        </div>
                        <div className={classes.left}>
                            <img className={classes.image} src={image} alt="" />
                        </div>
                    </div>
            }

        </div>
    );
};

export default FigureWithText;