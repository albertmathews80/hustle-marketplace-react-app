import classes from "./Comments.module.css";

const BlogComments = () => {
  return (
    <div className={classes.BlogContainer}>
      <div className={classes.commentProfile}>
        {/* <img src={image1} alt="" /> */}
      </div>
      <div className={classes.commentInfo}>
        <h3>Riyad Hossain</h3>
        <span>Mar 02, 2022 </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a egestas
          leo. Aliquam ut ante lobortis tellus cursus pellentesque. Praesent
          feugiat tellus quis aliquet
        </p>
      </div>
    </div>
  );
};

export default BlogComments;
