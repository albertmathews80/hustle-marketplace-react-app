import React from 'react'
import classes from './CardWithPrice.module.css'

const CardWithPrice = ({ cardImage, profileIcon, profileText, ratingIcon, rating, cardHeading, cardParagraph, cardPrice, buttonText }) => {
  return (
    <div className={classes.cards}>
      <div className={classes.cardImage}>
        <img src={cardImage} alt="" />
      </div>
      <div className={classes.cardInfo}>
        <div className={classes.cardProfile}>
          <div className={classes.cardProfileInner}>
            <img src={profileIcon} alt="" />
            <span>{profileText}</span>
          </div>
          <div className={classes.star}>
            <img src={ratingIcon} alt="" />
            <span>{rating}</span>
          </div>
        </div>
        <div className={classes.cardHeading}>
          <h3>{cardHeading}</h3>
          <p>
            {cardParagraph}
          </p>
        </div>
        <div className={classes.cardPrice}>
          <span>Starting at</span>
          <strong>${cardPrice}</strong>
        </div>
        <button>{buttonText}</button>
      </div>
    </div>
  )
}

export default CardWithPrice