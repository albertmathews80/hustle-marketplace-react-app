import classes from "./CreateNewOffer.module.css";
import player from "../../../images/Icon125player.png";
import movie from "../../../images/Icon126movie.png";
const CreateNewOffer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headingContainer}>
        <span>Create New Offer</span>
      </div>
      <div className={classes.main}>
        <div className={classes.first}>
          <input type="text" placeholder="I can..." />
          <div>Max 100 words</div>
        </div>
        <div className={classes.second}>
          <div>
            <div htmlFor="delivery">When you will deliver the offer?</div>
            <input
              type="text"
              name="delivery"
              id="delivery"
              placeholder="in 1 day"
            />
          </div>
          <div>
            <div htmlFor="price">Price</div>
            <input type="number" placeholder="$" name="price" id="price" />
          </div>
        </div>
        <div className={classes.second}>
          <div>
            <div htmlFor="delivery">Subcategory</div>
            <select name="subCategory" id="subCategory">
              <option value="">Select</option>
              <option value="">category 1</option>
              <option value="">category 2</option>
              <option value="">category 3</option>
            </select>
          </div>
          <div>
            <div htmlFor="delivery">Category</div>
            <select name="category" id="category">
              <option value="">Select</option>
              <option value="">category 1</option>
              <option value="">category 2</option>
              <option value="">category 3</option>
            </select>
          </div>
        </div>
        <div className={classes.third}>
          <div>
            <div htmlFor="delivery">Add Tags</div>
            <input
              type="text"
              name="delivery"
              id="delivery"
              placeholder="Type here to add"
            />
          </div>
        </div>

        <div className={classes.uploadContainer}>
          <div className={classes.uploadHeader}>
            Make it fun: Upload photos, videos!
          </div>
          <div className={classes.uploader}>
            <div className={classes.dropper}>
              <div>
                <img src={player} alt="" />
              </div>
              <i>Drop Files here</i>
              <div>
                <i>
                  or &nbsp;
                  <strong>Browse</strong>
                  &nbsp; to add attachments
                </i>
              </div>
            </div>
            <div className={classes.embedder}>
              <div>
                <img src={movie} alt="" />
              </div>
              <i>Embed</i>
              <i>from other sites</i>
            </div>
          </div>
        </div>

        <div className={classes.descriptionContainer}>
          <div className={classes.uploadHeader}>
            Provide a description for your offer, optimized for search results
          </div>
          {/* <input
            type="textbox"
            placeholder="Breifly explain what you will deliver to the buyer..."
          /> */}
          <textarea
            placeholder="Breifly explain what you will deliver to the buyer..."
          />
        </div>

        <div className={classes.finalContainer}>
          <div className={classes.text}>
            How are you planning to work with the buyer?
          </div>
          <div className={classes.onsite}>
            <div>
              <input type="radio" name="" id="" />
            </div>
            <span>ON-SITE IN</span>
            &nbsp;
            <p>Berlin, ger</p>
          </div>
          <div className={classes.confirmationText}>
            I confirm that i am able to deliver this service to buyers within
            delivery time specified. i will update or pause my offer if i can no
            longer meet this delivery time. i understand that late delivery will
            adversely affect my rankings on pph and will entitle the buyer to a
            refund. see <span> T&Cs</span>
          </div>
          <div>
            <button className={classes.postButton}>Post Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewOffer;
