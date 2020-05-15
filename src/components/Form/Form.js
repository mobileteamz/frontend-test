import React, { useState, useContext, useEffect } from "react";
import FormContext from "../../components/context/FormContext";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import GrantScholarship from "./GrantsScholarship";
import WorkStudy from "./WorkStudy";
import School from "./School";
import FederalLoans from "./FederalLoans";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    width:"100%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  },
  selectInput: {
    width: "200px"
  }
  
}));

const Form = () => {
  const classes = useStyles();
  const formContext = useContext(FormContext);
  const { formError, handleError, setTotalCost, totalCost } = formContext;

  const [fedLoans, setFedForm] = useState({
    subsidizedFedLoan: "",
    unsubsidizedFedLoan: ""
  });
  //destructuring
  const { subsidizedFedLoan, unsubsidizedFedLoan } = fedLoans;
  const [grantsScholarship, setGrantsScholarship] = useState({
    institutionOnNeed: "",
    institutionNotOnNeed: "",
    government: "",
    privateLoan: ""
  });
  const {
    institutionOnNeed,
    institutionNotOnNeed,
    government,
    privateLoan
  } = grantsScholarship;
  const [school, setSchoolForm] = useState({
    selectedSchool: "",
    admission: "",
    attendance: ""
  });
  const { selectedSchool, admission, attendance } = school;
  const [workStudy, setWorkStudyForm] = useState({
    workStudy: ""
  });
  const { workStudyForm } = workStudy;
  const handleSubmit = event => {
    event.preventDefault();
    //validar
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
      handleError();
      console.log("error");
      return;
    }
  };

  useEffect(() => {
    const setTotal = () => {
      setTotalCost();
    };
    setTotal();
  }, [fedLoans, grantsScholarship]);
  return (
    <div className={classes.root}>
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
        <br/>
        </div>
        
        <div>
          <h1>
            Total Cost to You: {totalCost === 0 ? "   $00,000" : `$${totalCost}`}
          </h1>
        </div>
        {formError ? <p>Must fill every input.</p> : null}
        <Button type="submit" value="SUBMIT">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default Form;
