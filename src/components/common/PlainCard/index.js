import React from 'react'
import classes from './PlainCard.module.css'
const index = ({ cardImage,
    firstIcon,
    postFirstIcon,
    secondIcon,
    postSecondIcon,
    cardHeading,
    cardParagraph,
}) => {

    return (
        <div className={classes.cards}>
            <div className={classes.cardImage}>
                <img src={cardImage} alt="" />
            </div>
            <div className={classes.cardInfo}>
                <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                        <img src={firstIcon} alt="" />
                        <span>{postFirstIcon}</span>
                    </div>
                    <div className={classes.profileRight}>
                        <img src={secondIcon} alt="" />
                        <span>{postSecondIcon}</span>
                    </div>
                </div>
                <div className={classes.cardHeading}>
                    <h3>{cardHeading}</h3>
                    <p>
                        {cardParagraph}
                    </p>
                </div>

            </div>
        </div>

    )
}

export default index