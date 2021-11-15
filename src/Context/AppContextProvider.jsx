import React, { useState, useEffect } from "react";
import { AppContext } from "./App-Context";
import axios from "axios";

const AppContextProvider = (props) => {
  //create state for managing the employeeList
  const [employeeList, setEmployeeList] = useState(null);
  //create state for opening the add employee dialog
  const [showAddEmployeeDialog, setShowAddEmployeeDialog] = useState(false);
  //create state for the alert
  const [alert, setAlert] = useState({
    showAlert: false,
    isSuccess: false,
    message: "",
  });

  //on initial render, query the current employeeList
  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:5001/api/employee",
    })
      .then((response) => {
        //set the initial state
        setEmployeeList(response.data);
      })
      .catch((error) => {
        //display the error
        setAlert({
          showAlert: true,
          isSuccess: false,
          message: "An error occurred during the request",
        });
        //set the initial state to empty
        setEmployeeList(null);
      });
  }, []);

  //handler function for adding an item to the employeeList
  // const employeeListAddHandler = (item) => {
  //   //ensure the item is non-empty
  //   if (item) {
  //     //dispatch the item to the reducer
  //     dispatchEmployeeList({ type: "ADD_TO_EMPLOYEE_LIST", payload: item });
  //   }
  // };
  //handler function for showing the add employee dialog
  const addEmployeeDialogHandler = (isOpen) => {
    setShowAddEmployeeDialog(isOpen);
  };
  //handler function for the alert
  const alertHandler = (alert) => {
    setAlert(alert);
    //after 10 seconds, close the alert
    setTimeout(() => {
      setAlert({ showAlert: false, isSuccess: false, message: "" });
    }, 10000);
  };
  return (
    <AppContext.Provider
      value={{
        employeeList,

        showAddEmployeeDialog,
        addEmployeeDialogHandler,
        alert,
        alertHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
