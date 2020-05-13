import React, { useReducer, Children } from "react";
import FormContext from "./FormContext";
import FormReducer from "./FormReducer";
import { FORM_VALIDATION } from "../../types";

const FormState = props => {
  //State inicial
  const initialState = {
    formError: false,
    completedForm: null,
    schools:[
        {school: "Yale", id: 1},
        {school: "Yale", id: 2},
        {school: "Yale", id: 3},
        {school: "Yale", id: 4},
        {school: "Yale", id: 5},
        {school: "Yale", id: 6},
        {school: "Yale", id: 7},
        {school: "Yale", id: 8},
        {school: "Yale", id: 9},
        {school: "Yale", id: 10},
    ]
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const handleError = () => {
      dispatch({
          type: FORM_VALIDATION
      })
  }
  return (
      <FormContext.Provider
      value={{
          formError: state.formError,
          schools: state.schools,
          handleError
      }}
      >
        {props.children}
      </FormContext.Provider>
  )
};
export default FormState;
