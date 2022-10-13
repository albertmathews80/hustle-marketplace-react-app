import React from "react";
import classes from "./index.module.css";


const ServiceHeader = ({title,img1,img2,rating}) => {
    return (
        <div className={classes.container}>
            <div className={classes.containerWrap}>
                <div className={classes.imgWrap}>
                    <img src={img1} alt="" />
                </div>
                <div className={classes.textWrap}>
                    <h2> {title} </h2>
                    <div>
                        <img src={img2} alt="" />
                        <span> {rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHeader;
