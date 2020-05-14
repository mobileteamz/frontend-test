import React, { useReducer } from "react";
import FormContext from "./FormContext";
import FormReducer from "./FormReducer";
import {
  FORM_VALIDATION,
  TOTAL_COST,
  TOTAL_GRANTS_SCHOLARSHIPS,
  TOTAL_FED_LOANS
} from "../../types";

const FormState = props => {
  //State inicial
  const initialState = {
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
  ],
    totalGrantsScholarships: "",
    totalFederalLoans: "",
    totalCost: "",
    workstudy: "",
    formError: false,
    completedForm: null
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const handleError = () => {
    dispatch({
      type: FORM_VALIDATION
    });
  };

  const setTotalFedLoans = (sumTotalFedLoans) => {
    dispatch({
      type: TOTAL_FED_LOANS,
      payload: sumTotalFedLoans
    });
  };

  const setTotalGrantsScholarships = (sumTotalGrantsScholarships) => {
    dispatch({
      type: TOTAL_GRANTS_SCHOLARSHIPS,
      payload: sumTotalGrantsScholarships
    });
  };

  return (
    <FormContext.Provider
      value={{
        formError: state.formError,
        schools: state.schools,
        totalFederalLoans: state.totalFederalLoans,
        totalGrantsScholarships: state.totalGrantsScholarships,
        setTotalFedLoans,
        setTotalGrantsScholarships,
        handleError
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
export default FormState;
