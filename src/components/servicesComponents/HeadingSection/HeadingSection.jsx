import classes from "./HeadingSection.module.css";

const HeadingSection = ({ mainTitle, subTitle, heading }) => {
  return (
    <div className={classes.container}>
      <div className={classes.containerWrap}>
        <h4>
          {mainTitle} | {subTitle}
        </h4>
        <h1>{heading}</h1>
        <div className={classes.containerList}>
          <div className={classes.List}></div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
