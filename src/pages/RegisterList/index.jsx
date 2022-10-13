import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCounterContext } from "./../../components/hooks/useCounterContext";
import RoleButton from "../../components/RoleButton/RoleButton";
// import BUYERIMAGE from "./../../images/Group 299.png";
// import SELLERIMAGE from "./../../images/seller.png";
import Register from "./../Register";
import Register2 from "./../Register2";
import Register3 from "./../Register3";
import Register4 from "./../Register4";
import classes from "./RegisterList.module.css";
import { api } from "../../services/api";


const RegisterList = () => {

  const [userRole,setUserRole]=useState([])

  const navigate = useNavigate();
  
  const { registerSteps, setRegisterSteps } = useCounterContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    c_password: "",
    city: "",
    Area: "",
    checkBox1:null ,
    checkBox2: null,
  });


  useEffect(() => {

    setRegisterSteps(0);

    const fetchAllRoles = () => {
      api.get('/roles')
      .then((res) => {
          setUserRole(res.data.data.roles)
          console.log(res.data.data.roles);
      })
      .catch((err) => {
          console.log(err);
      });
};
  fetchAllRoles()
  }, []);

  const showSteps = (steps) => {
    console.log(steps);

    switch (steps) {
      case 0:
        return <Register formData={formData} setFormData={setFormData} />;
      case 1:
        return <Register2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Register3 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Register4 />;
      default:
        return;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <div className={classes.heading}>
          <h2>Register For Join With Us</h2>
        </div>

         
               {userRole && <RoleButton userRoles={userRole}/>}      

           
        {/* <div className={classes.role_btn}>
          <div className={`${classes.btn} ${classes.active_btn}`}>
            <img src={SELLERIMAGE} alt={SELLERIMAGE} />
            <div className={classes.text}>
              <p>Seller</p>
            </div>
          </div>

          <div className={classes.btn}>
            <img src={BUYERIMAGE} alt={BUYERIMAGE} />
            <div className={classes.text}>
              <p >Buyer</p>
            </div>
          </div>
        </div> */}

        <div className={classes.counter}>
          <span className={classes.number}>1</span>
          <span className={classes.dashed}></span>
          <span className={classes.number}>2</span>
          <span className={classes.dashed}></span>
          <span className={classes.number}>3</span>
        </div>

        {showSteps(registerSteps)}

      </div>
    </div>
  );
};

export default RegisterList;
