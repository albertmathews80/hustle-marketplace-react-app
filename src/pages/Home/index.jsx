import Section from "./../../components/homeComponents/Section/Section";
import Section2 from "./../../components/homeComponents/Section2/Section2";
import Section3 from "./../../components/homeComponents/Section3/Section3";
import Section5 from "./../../components/homeComponents/Section5/Section5";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Section />
      <div className={styles.container}>
        <Section2 />
        <Section3 />
        <Section5 />
      </div>
    </>
  );
};

export default Home;
