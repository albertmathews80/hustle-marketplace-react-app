import { useCounterContext } from "../../components/hooks/useCounterContext";
import classes from "./Register2.module.css";

const Register2 = ({ formData, setFormData }) => {
    const { setRegisterSteps } = useCounterContext();

    const cityOptions = [
        {
            label: "London",
            value: "london",
        },
        {
            label: "Chicago",
            value: "chicago",
        },
    ];

    const areaOptions = [
        {
            label: "United Kingdom",
            value: "united kingdom",
        },
        {
            label: "London",
            value: "london",
        },
    ];
    const valueHandler = (e)=>{
          setFormData({ ...formData, city: e.target.value });
    }
    const areaValueHandler =(e)=>{
        setFormData({ ...formData, Area: e.target.value });
  }
  
    return (
        <div className={classes.formContainer2}>
            <form>
                <div>
                    <label htmlFor="city">Service City*</label>
                    <select name="" id="city" onChange={valueHandler}>
                        {cityOptions.map((options) => (
                            <option
                                key={options.label}
                                value={options.value}
                            >
                                {options.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="area">Service Area*</label>
                    <select name="" id="area" onChange={areaValueHandler}>
                        {areaOptions.map((options) => (
                            <option
                                key={options.label}
                                onChange={(e) => {
                                    setFormData({ ...formData, Area: e });
                                }}
                                value={options.value}
                            >
                                {options.label}
                            </option>
                        ))}
                    </select>
                </div>
            </form>

            <div className={classes.row}>
                <button onClick={() => setRegisterSteps(0)}>Previous</button>
                <button onClick={() => setRegisterSteps(2)}>Next</button>
            </div>
        </div>
    );
};

export default Register2;
