import {
  FORM_VALIDATION,
  TOTAL_FED_LOANS,
  TOTAL_GRANTS_SCHOLARSHIPS
} from "../../types";
export default (state, action) => {
  switch (action.type) {
    case FORM_VALIDATION:
      return {
        ...state,
        formError: true
      };
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
    default:
      return state;
  }
};
