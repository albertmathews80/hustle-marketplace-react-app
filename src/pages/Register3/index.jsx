import { useEffect } from "react";
import { useState } from "react";
import { useCounterContext } from "./../../components/hooks/useCounterContext";
import styles from "./Register3.module.css";
import { api } from "../../services/api";

const Register3 = ({ formData, setFormData }) => {
  const { setRegisterSteps,roleId } = useCounterContext();

  const [checked1,setChecked1]=useState(false)
  const [checked2,setChecked2]=useState(false)
  
  console.log(checked1,checked2)

  const handleSubmit = () => {
    console.log(formData);
    // setRegisterSteps(3);
    const payload={
      name:{
        first:formData.firstName,
        last:formData.lastName
      },
      email:formData.email,
      password:formData.password,
      confirmPassword:formData.c_password,
      roleID:roleId,
      location:{
        city:formData.city,
        area:formData.Area
      }
    }

    api.post('/users',payload)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

  };

  return (
    <>
      <div className={styles.terms_condition}>
        <h3>Terms and Conditions</h3>

        <div>
          <input
            type="checkbox"
            // checked={formData.checkBox1}
            checked={checked1}
            id="checkbox1"
            onChange={() => {
              setFormData({ ...formData, checkBox1:setChecked1(!checked1) });
            }}
          />
          <label htmlFor="checkbox1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            // checked={formData.checkBox2}
            checked={checked2}
            id="checkbox2"
            onChange={() => {
              setFormData({ ...formData, checkBox2:setChecked2(!checked2) });
            }}
          />
          <label htmlFor="checkbox2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </label>
        </div>

        <div className={styles.row}>
          <button onClick={() => setRegisterSteps(1)}>Previous</button>
          {checked1 && checked2 && <button onClick={handleSubmit}>Submit</button>}
          {(!checked1 || !checked2) && <button onClick={handleSubmit} disabled style={{opacity:"0.6"}}>Submit</button>}
          {/* <button onClick={handleSubmit}>Submit</button> */}
        </div>
      </div>
    </>
  );
};

export default Register3;
