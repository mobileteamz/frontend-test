import React, { useReducer } from "react";
import FormContext from "./FormContext";
import FormReducer from "./FormReducer";
import {
  FORM_VALIDATION,
  TOTAL_COST,
  TOTAL_GRANTS_SCHOLARSHIPS,
  TOTAL_FED_LOANS,
  SEND_FORM,
  WORK_STUDY,
  ATTENDANCE_STATE
} from "./types";

// Store que contiene context, state y reducer
// de esta manera el state se puede propagar por el arbol de componentes
// en este caso no era muy necesario pero si fuese una app más grande
// sería util el acceso de componentes a distintos states

const FormState = props => {
  //State inicial
  const initialState = {
    schools: [
      { school: "Yale", id: 1 },
      { school: "Yale", id: 2 },
      { school: "Yale", id: 3 },
      { school: "Yale", id: 4 },
      { school: "Yale", id: 5 },
      { school: "Yale", id: 6 },
      { school: "Yale", id: 7 },
      { school: "Yale", id: 8 },
      { school: "Yale", id: 9 },
      { school: "Yale", id: 10 }
    ],
    attendance: 0,
    totalGrantsScholarships: 0,
    totalFederalLoans: 0,
    workStudy: 0,
    totalCost: 0,
    formError: false
  };
  //llamo al reducer
  const [state, dispatch] = useReducer(FormReducer, initialState);
  //función para validar el form
  const handleError = () => {
    dispatch({
      type: FORM_VALIDATION
    });
  };
  //recibo la suma de federal loans, simulando que otra parte de la app lo necesite
  const setTotalFedLoans = sumTotalFedLoans => {
    dispatch({
      type: TOTAL_FED_LOANS,
      payload: sumTotalFedLoans
    });
  };
  //lo mismo que lo anterior
  const setTotalGrantsScholarships = sumTotalGrantsScholarships => {
    dispatch({
      type: TOTAL_GRANTS_SCHOLARSHIPS,
      payload: sumTotalGrantsScholarships
    });
  };
  //busco workstudy
  const setWorkStudyContext = workStudy => {
    dispatch({
      type: WORK_STUDY,
      payload: workStudy
    });
  };

  const setAttendance = attendance => {
    dispatch({
      type: ATTENDANCE_STATE,
      payload: attendance
    });
  };

  const setTotalCost = () => {
    dispatch({
      type: TOTAL_COST
    });
  };
  const sendForm = () => {
    dispatch({
      type: SEND_FORM
    });
  };

  return (
    //declaro el provider que comparte los state y funciones, este va en App.js
    <FormContext.Provider
      value={{
        formError: state.formError,
        schools: state.schools,
        totalFederalLoans: state.totalFederalLoans,
        totalGrantsScholarships: state.totalGrantsScholarships,
        workStudy: state.workStudy,
        attendance: state.attendance,
        totalCost: state.totalCost,
        setTotalFedLoans,
        setTotalGrantsScholarships,
        setWorkStudyContext,
        setAttendance,
        handleError,
        setTotalCost,
        sendForm,
       
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
export default FormState;
