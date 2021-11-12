import React, { useReducer } from "react";
import { AppContext } from "./App-Context";
import { employeeListReducer } from "../Reducers/employeeListReducer";

const AppContextProvider = (props) => {
  //create state for managing the employeeList
  const [employeeList, dispatchEmployeeList] = useReducer(
    employeeListReducer,
    []
  );

  //handler function for adding an item to the employeeList
  const employeeListAddHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      dispatchEmployeeList({ type: "ADD_TO_EMPLOYEE_LIST", payload: item });
    }
  };
  return (
    <AppContext.Provider
      value={{
        employeeList,
        employeeListAddHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
