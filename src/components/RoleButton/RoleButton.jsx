import React from "react";
import BUYERIMAGE from "./../../images/Group 299.png";
import SELLERIMAGE from "./../../images/seller.png";
import classes from "./Index.module.css";
import { useCounterContext } from "../hooks/useCounterContext";

const RoleButton = ({ userRoles }) => {

    const {dispatch,roleId}=useCounterContext()

    const getRoleId=(id)=>{
        console.log(id)
        dispatch({
            type:"GET_ROLE_ID",
            payload:id
        })
    }
    
    return (
        <div className={classes.role_btn}>
            {userRoles.map((Roles) => {
                return (
                    <div className={`${classes.btn} ${classes.active_btn} `} key={Roles._id} onClick={()=>getRoleId(Roles._id)}>
                        <img src={SELLERIMAGE} alt={SELLERIMAGE} />
                        <div className={classes.text}>
                            <p>{Roles.role}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RoleButton;
