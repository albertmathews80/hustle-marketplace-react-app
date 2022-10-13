import classes from "./Roles.module.css";
import Heading from "../common/Heading";
const Roles = ({ setShowScreen }) => {
  const data = ["Buyer", "Seller"];
  const screenChangeHandler = (e) => {
    setShowScreen(e.target.value);
  };

  return (
    <div className={classes.container}>
      <Heading heading="Roles" />
      <div className={classes.main}>
        <div className={classes.headingContainer}>
          <div>Roles</div>
          <div>Action</div>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className={classes.rowContainer}>
              <div>{element}</div>
              <div>
                <select
                  name="role"
                  className={classes.select}
                  id="role"
                  onChange={screenChangeHandler}
                >
                  <option>Select</option>
                  <option value={element}>View</option>
                  <option value="editBuyer">Edit</option>
                  <option value="deleteBuyer">Delete</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roles;
