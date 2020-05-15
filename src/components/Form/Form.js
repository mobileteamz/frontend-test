import React, { useState, useContext, useEffect } from "react";
import FormContext from "../../components/context/FormContext";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import { blueGrey, grey } from "@material-ui/core/colors";
import GrantScholarship from "./GrantsScholarship";
import WorkStudy from "./WorkStudy";
import School from "./School";
import FederalLoans from "./FederalLoans";
//form padre que contiene el form, crea un state para cada hijo y trae los states de cada uno con un setter

//styles de material ui
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    width: "100%"
  },

  button1: {
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 38,
    padding: "0 30px",
    margin: theme.spacing(3),
    backgroundColor: grey[500],
    "&:hover": {
      backgroundColor: grey[700]
    },
    lineHeight: 26,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 5.5
  },
  button2: {
    borderRadius: 3,
    border: 0,
    height: 38,
    padding: "0 30px",
    margin: theme.spacing(3),
    "&:hover": {
      backgroundColor: grey[700]
    },
    lineHeight: 26,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 5.5
  }
}));

const Form = () => {
  const classes = useStyles();
  //llamo al context
  const formContext = useContext(FormContext);
  //destructuring context
  const { formError, handleError, setTotalCost, totalCost } = formContext;
  //state que trae FederalLoans
  const [fedLoans, setFedForm] = useState({
    subsidizedFedLoan: "",
    unsubsidizedFedLoan: ""
  });
  //destructuring
  const { subsidizedFedLoan, unsubsidizedFedLoan } = fedLoans;
  //state que trae GrantsScholarship
  const [grantsScholarship, setGrantsScholarship] = useState({
    institutionOnNeed: "",
    institutionNotOnNeed: "",
    government: "",
    privateLoan: ""
  });
  //destructuring
  const {
    institutionOnNeed,
    institutionNotOnNeed,
    government,
    privateLoan
  } = grantsScholarship;
  //state de School
  const [school, setSchoolForm] = useState({
    selectedSchool: "",
    admission: "",
    attendance: ""
  });
  //destructuring
  const { selectedSchool, admission, attendance } = school;
  //state de workstudy
  const [workStudy, setWorkStudyForm] = useState({
    workStudy: ""
  });
  const { workStudyForm } = workStudy;
  //manejo el submit
  const handleSubmit = event => {
    event.preventDefault();
    //valido que ningun campo esté vacío
    if (
      selectedSchool.trim() === "" ||
      admission.trim() === "" ||
      attendance.trim() === "" ||
      institutionOnNeed.trim() === "" ||
      institutionNotOnNeed.trim() === "" ||
      government.trim() === "" ||
      privateLoan.trim() === "" ||
      subsidizedFedLoan.trim() === "" ||
      unsubsidizedFedLoan.trim() === "" ||
      workStudyForm.trim() === ""
    ) {
      //si alguna condición es true, llamo al reducer y paso formError a true
      handleError();
      return;
    }
  };
  //hook para calcular el costo total
  useEffect(() => {
    const setTotal = () => {
      setTotalCost();
    };
    setTotal();
  }, [fedLoans, grantsScholarship]);
  return (
    <div className={classes.root} boxShadow={1}>
      <h1 className="title">Your Financial Aid Offer</h1>
      <form onSubmit={handleSubmit}>
        <School setSchoolForm={setSchoolForm} />
        <h2 className="subtitle">Grants and Scholarships</h2>
        <p>
          Add the details of the money you don´t have to pay back: school grants
          and scholarships, federal grants and private grants.
        </p>
        <GrantScholarship setGrantsScholarship={setGrantsScholarship} />
        <div>
          <h2 className="subtitle">Federal Students Loans</h2>
          <p>Add the loans you have to pay back: federal student loans</p>
        </div>
        <FederalLoans setFedForm={setFedForm} />
        <div>
          <h2 className="subtitle">Work Study Programs</h2>
          <p>
            Add the details of the money your student can earn: work study
            amount
          </p>
        </div>
        <div className="title">
          <WorkStudy setWorkStudyForm={setWorkStudyForm} />
          <br />
        </div>
        <div>
          <h1>
            Total Cost to You:{" "}
            {totalCost === 0 ? "   $00,000" : `$${totalCost}`}
          </h1>
        </div>
        {formError ? (
          <p>Must fill every input.</p>
        ) : null /* mensaje de error en caso de input vacío */}
        <div className="footer">
          <button type="submit" className="myButton1">
            SUBMIT
          </button>
          <button className="myButton1 inactive">CANCEL</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
