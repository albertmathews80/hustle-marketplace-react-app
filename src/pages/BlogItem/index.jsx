import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import classes from "./BlogItem.module.css";
import AC2 from "../../images/ACOperator2.png";
// import AC3 from "../../images/ACOperator3.png";
import blog2 from "../../images/blog2.png";
import facebookIcon from "../../images/facebook.png";
import twitter from "../../images/twitter1.png";
import instagram1 from "../../images/instagram1.png";
import youtube from "../../images/youtube1.png";
import IMAGE1 from "./../../images/ (1).png";
import IMAGE3 from "./../../images/ (3).png";
import timerImage from "../../images/timer.png";
import label from "../../images/label2.png";
import image1 from "../../images/comment1.png";
import image2 from "../../images/comment2.png";
import image3 from "../../images/comment1.png";
import electricImage from "../../images/ELECTRIC.png";
import BlogComments from "../../components/BlogComments/BlogComments";

const blogComment = [
  {
    blogImage1: image1,
    title: "Riyad Hossain ",
    date: "Mar 02, 2022 ",
    commentPara:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a egestas leo. Aliquam ut ante lobortis tellus cursus pellentesque. Praesent feugiat tellus quis aliquet",
  },
  {
    blogImage1: image2,
    title: "Riyad Hossain ",
    date: "Mar 02, 2022 ",
    commentPara:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a egestas leo. Aliquam ut ante lobortis tellus cursus pellentesque. Praesent feugiat tellus quis aliquet",
  },
  {
    blogImage1: image3,
    title: "Riyad Hossain ",
    date: "Mar 02, 2022 ",
    commentPara:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a egestas leo. Aliquam ut ante lobortis tellus cursus pellentesque. Praesent feugiat tellus quis aliquet",
  },
];

const BlogItem = () => {
  return (
    <div className={classes.container}>
      <HeadingSection mainTitle="Home" subTitle="Blog" heading="Blog" />
      <div className={classes.blogContainer}>
        <div className={classes.blogImageContainer}>
          <img src={AC2} alt="" />
        </div>
        <div className={classes.text1}>
          One advanced diverted domestic repeated bringing you old. Possible
          procured her trifling laughterthough-ts property she met way.
          Companions shy had solicitude favourable own. Which could saw guest
          man now heard but. Lasted my coming uneasy marked so should. Gravity
          letters it amongst herself dearest anwindo- ws by. Wooded ladies she
          basket season age her uneasy saw. Discourse unwilling am no described
          dejecti- on incommode no listening of. Before nature his parish boy.
        </div>
        <div className={classes.headingQuotes}>
          <h2>“In it except to so temper mutual tastes mother.</h2>
          <h2>Interested cultivated its continuing Out interested.”</h2>
        </div>
        <div className={classes.quotesContainer}>
          <p>
            One advanced diverted domestic repeated bringing you old. Possible
            procured her trifling laughter though- ts property she met way.
            Companions shy had solicitude favourable own. Which could saw guest
            man now heard but. Lasted my coming uneasy marked so should. Gravity
            letters it amongst herself dearest an wind- ows by. Wooded ladies
            she basket season age her uneasy saw. Discourse unwilling am no
            described dejec- tion incommode no listening of. Before nature his
            parish boy.
          </p>
          <div className={classes.innerBlog}>
            <div className={classes.innerBlogImage}>
              <img src={blog2} alt="" />
            </div>
            <div className={classes.innerBlogPara}>
              Use off agreeable law unwilling sir deficient curiosity instantly.
              Easy mind life fact with see has bore ten. Parish any chatty can
              eli-nor direct for former. Up as meant widow e-qual an share
              least. One advanced diverted domestic sex repeated bringing you
              old. Possible procured her trifling laughter thou-ghts property
              she met way. Companions s- hy had solicitude favourable own.
              least. One advanced diverted domestic sex repeated bringing you
              old. Possible procured her trifling laughter thou-ghts property
              she met way. Companions s- hy had solicitude favourable own.
            </div>
          </div>
          <div className={classes.innerBlogPara2}>
            Lasted my coming uneasy marked so should. Gravity letters it amongst
            herself dearest an windows by. Wo- oded ladies she basket season age
            her uneasy saw. Discourse unwilling am no described dejection
            incom-mode no listening of. Before nature his parish boy. herself
            dearest an windows by. Wo- oded ladies she basket season age her
            uneasy saw.
          </div>
          <div className={classes.iconContainer}>
            <div className={classes.shareContainer}>
              <span>Share:</span>
              <div className={classes.socialIcon}>
                <img src={facebookIcon} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram1} alt="" />
                <img src={youtube} alt="" />
              </div>
            </div>
            <div className={classes.tagsContainer}>
              <span>Tags:</span>
              <div className={classes.btnContainer}>
                <button>Clean</button>
                <button>Service</button>
                <button>Paint</button>
              </div>
            </div>
          </div>
        </div>

        {/* Title with border */}
        <div className={classes.relatedBlog}>
          <div className={classes.heading}>
            <h1>Related Blog</h1>
          </div>
        </div>
      </div>

      <div className={classes.cardWrap}>
        <div className={classes.cards}>
          <div className={classes.cardImage}>
            <img src={IMAGE3} alt="" />
          </div>
          <div className={classes.cardInfo}>
            <div className={classes.cardProfile}>
              <div className={classes.cardProfileInner}>
                <img src={timerImage} alt="" />
                <span>15 Feb 2022</span>
              </div>
              <div className={classes.star}>
                <img src={label} alt="" />
                <span>Moving</span>
              </div>
            </div>
            <div className={classes.cardHeading}>
              <h2>All Painting & Renovation Service</h2>
              <p>
                It is a long established fact a reader will be distracted by
                thereadable
              </p>
            </div>
          </div>
        </div>
        <div className={classes.cards}>
          <div className={classes.cardImage}>
            <img src={electricImage} alt="" />
          </div>
          <div className={classes.cardInfo}>
            <div className={classes.cardProfile}>
              <div className={classes.cardProfileInner}>
                <img src={timerImage} alt="" />
                <span>15 Feb 2022</span>
              </div>
              <div className={classes.star}>
                <img src={label} alt="" />
                <span>Moving</span>
              </div>
            </div>
            <div className={classes.cardHeading}>
              <h2>All Emergency Electrical Supports</h2>
              <p>
                It is a long established fact a reader will be distracted by
                thereadable
              </p>
            </div>
          </div>
        </div>
        <div className={classes.cards}>
          <div className={classes.cardImage}>
            <img src={IMAGE1} alt="" />
          </div>
          <div className={classes.cardInfo}>
            <div className={classes.cardProfile}>
              <div className={classes.cardProfileInner}>
                <img src={timerImage} alt="" />
                <span>15 Feb 2022</span>
              </div>
              <div className={classes.star}>
                <img src={label} alt="" />
                <span>Moving</span>
              </div>
            </div>
            <div className={classes.cardHeading}>
              <h2>All Hair Cut & Hair Color Service</h2>
              <p>
                It is a long established fact a reader will be distracted by
                thereadable
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Post your comments */}
      <div className={classes.blogContainer}>
        <div className={classes.heading}>
          <h1>Post Your Comments</h1>
        </div>

        <form className={classes.form}>
          <div className={classes.inputsWrap}>
            <div>
              <span>Your Name*</span>
              <input type="text" placeholder="Type Your Name" />
            </div>
            <div>
              <span>Email Address*</span>
              <input type="text" placeholder="Type Your Email Address " />
            </div>
          </div>
          <div className={classes.textArea}>
            <span>Comments*</span>
            <textarea rows="6" placeholder=" Post Comments" />
          </div>
          <button>Post Comments</button>
        </form>

        <div className={classes.container}>
          <BlogComments />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
