//El reducer controla las acciones entre componentes,
//creo un switch que recibe un type del dispatch desde FormState
//al coincidir ejerce cambios en los initial states

import {
  FORM_VALIDATION,
  TOTAL_FED_LOANS,
  TOTAL_GRANTS_SCHOLARSHIPS,
  TOTAL_COST,
  SEND_FORM,
  WORK_STUDY,
  ATTENDANCE_STATE
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case FORM_VALIDATION:
      return {
        ...state,
        formError: true
      };
      case ATTENDANCE_STATE:
          return{
            ...state,
            attendance: action.payload || 0
          } 
    case TOTAL_FED_LOANS:
      return {
        ...state,
        totalFederalLoans: action.payload 
      };
    case TOTAL_GRANTS_SCHOLARSHIPS:
      return {
        ...state,
        totalGrantsScholarships: action.payload 
      };
    case WORK_STUDY:
      return{
        ...state,
        workStudy: action.payload || 0
      } 
    
    case TOTAL_COST: {
      return {
        ...state,
        totalCost:
          parseInt(state.attendance) +        
          parseInt(state.totalFederalLoans) +
          parseInt(state.totalGrantsScholarships)+
          parseInt(state.workStudy)
          
      };
    }
    case SEND_FORM:
      return{
        ...state,
        formError: false,
      }
    default:
      return state;
  }
};
