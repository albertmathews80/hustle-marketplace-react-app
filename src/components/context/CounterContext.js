import { createContext, useReducer, useState } from "react";

export const CounterContext = createContext();

export const myReducer = (state, action) => {
  switch (action.type) {
    case "GET_ROLE_ID":
      return { roleId: action.payload };
    default:
      return state;
  }
};

export const CounterContextProvider = ({ children }) => {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [registerSteps, setRegisterSteps] = useState(0);

  const [state, dispatch] = useReducer(myReducer, {
    roleId: null,
  });

  return (
    <CounterContext.Provider
      value={{
        currentSteps,
        setCurrentSteps,
        registerSteps,
        setRegisterSteps,
        ...state,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
