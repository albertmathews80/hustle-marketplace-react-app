import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCounterContext } from "./../../components/hooks/useCounterContext";
import classes from "./Register.module.css";
import axios from "axios";


const Register = ({ formData, setFormData }) => {
    const navigate = useNavigate();
    const { setRegisterSteps } = useCounterContext();

    // const [roles,setRoles]=useState([])

    // console.log(roles.data)

    // GET ALL ROLES
   

    const handleRegister = () => {
        // if (
        //     formData.firstName === "" ||
        //     formData.lastName === "" ||
        //     formData.email === "" ||
        //     formData.phone === "" ||
        //     formData.password === "" ||
        //     formData.c_password === ""
        // ) {
        //     alert("All field must be filled.");
        //     return;
        // }
        // if (formData.password !== formData.c_password) {
        //     alert("Password mismatch password and confirm password must be matched.");
        //     return;
        // }
        setRegisterSteps(1);
    };

    return (
        <div className={classes.formContainer}>
            <div className={classes.form}>
                <div className={classes.row}>
                    <div>
                        <label htmlFor="first_name">First Name*</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            id="first_name"
                            onChange={(e) => {
                                setFormData({ ...formData, firstName: e.target.value });
                            }}
                            value={formData.firstName}
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name*</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            id="last_name"
                            onChange={(e) => {
                                setFormData({ ...formData, lastName: e.target.value });
                            }}
                            value={formData.lastName}
                        />
                    </div>
                </div>
                <div className={classes.row}>
                    <div>
                        <label htmlFor="email">Email Address*</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            id="email"
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                            }}
                            value={formData.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number*</label>
                        <input
                            type="Number"
                            placeholder="Type Number"
                            id="phone"
                            onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value });
                            }}
                            value={formData.phone}
                        />
                    </div>
                </div>
                <div className={classes.row}>
                    <div>
                        <label htmlFor="password">Password*</label>
                        <input
                            type="password"
                            placeholder="Type password"
                            id="password"
                            onChange={(e) => {
                                setFormData({ ...formData, password: e.target.value });
                            }}
                            value={formData.password}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm_password">Confirm Password*</label>
                        <input
                            type="password"
                            placeholder="Re-Type Password"
                            id="confirm_password"
                            onChange={(e) => {
                                setFormData({ ...formData, c_password: e.target.value });
                            }}
                            value={formData.c_password}
                        />
                    </div>
                </div>

                <div className={classes.row}>
                    <button onClick={() => navigate("/login")}>Previous</button>
                    <button onClick={handleRegister}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
