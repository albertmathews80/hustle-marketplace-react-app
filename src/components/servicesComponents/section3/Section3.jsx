import React from 'react'
import classes from "./Section3.module.css"
import map from "../../../images/map.png"
import { useCounterContext } from '../../hooks/useCounterContext'
import { Navigate, useNavigate } from 'react-router-dom'

const Section3 = () => {
  const {setCurrentSteps}=useCounterContext()
  const Navigate= useNavigate()
  // const {count,dispatch}=useCounterContext()
  // console.log(count)
  
  // const increaseCounter=()=>{
  //   dispatch({
  //     type:"INCREASE_COUNT"
  //   })
  // }
  // const decreaseCounter=()=>{
  //   dispatch({
  //     type:"DECREASE_COUNT"
  //   })
  // }

  return (
    <div className={classes.container}>
       <div className={classes.containerWrap}>
          <button>Select Current Location</button>
          <img src={map} alt="" />
          <div className={classes.btnContainer}>
            <button onClick={()=>Navigate("/services")}>PREVIOUS</button>
            <button onClick={()=>setCurrentSteps(1)}>NEXT</button>
          </div>
       </div>
    </div>
  )
}

export default Section3