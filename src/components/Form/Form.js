import React, { useState, useContext, useEffect } from "react";
import FormContext from "../../components/context/FormContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, Grid } from "@material-ui/core/";
import GrantScholarship from "./GrantsScholarship";
import WorkStudy from "./WorkStudy";
import School from "./School";
import FederalLoans from "./FederalLoans";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,

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
  const { formError, handleError, schools } = formContext;

  const [totalLoans, setTotalLoans] = useState("");
  // const [form, setForm] = useState({
  //   school: "",
  //   admision: "",
  //   attendance: "",
  //   institutionOnNeed: "",
  //   institutionNotOnNeed: "",
  //   government: "",
  //   privateLoan: "",
  //   subsidizedFedLoan: "",
  //   unsubsidizedFedLoan: "",
  //   workStudy: ""
  //   // totalGrantScholarship: institutionOnNeed +  institutionNotOnNeed + government + privateLoan
  // });
  // //destructuring para mejor manejo de variables y no repetir codigo
  // const {
  //   school,
  //   admision,
  //   attendance,
  //   institutionNotOnNeed,
  //   institutionOnNeed,
  //   government,
  //   privateLoan,
  //   subsidizedFedLoan,
  //   unsubsidizedFedLoan,
  //   workStudy
  // } = form;
  //seteo el value del form a su state
  // const handleChange = event => {
  //   setForm({
  //     ...form,
  //     [event.target.name]: event.target.value
  //   });
  // };
  //use effect para actualizar la suma total  de prestamos
  // useEffect(() => {
  //   const displayTotalLoan = () => {
  //     if (sumGrantAndScholarLoan >= 0) {
  //       setTotalLoans(
  //         sumGrantAndScholarLoan + sumFedLoans + parseInt(workStudy)
  //       );
  //     } else {
  //       setTotalLoans("");
  //     }
  //   };
  //   displayTotalLoan();
  // }, [form]);

  return (
    <div className={classes.root}>
      <h1 className="title">Your Financial Aid Offer</h1>
      <hr />
      <School />
      <h2>Grants and Scholarships</h2>
      <hr />
      <p>
        Add the details of the money you don´t have to pay back: school grants
        and scholarships, federal grants and private grants.
      </p>
      <GrantScholarship />
      <div>
        <h2>Federal Students Loans</h2>
        <p>Add the loans you have to pay back: federal student loans</p>
      </div>
      <FederalLoans />
      <div>
        <h2>Work Study Programs</h2>
        <p>
          Add the details of the money your student can earn: work study amount
        </p>
      </div>
      <WorkStudy />
      <div>
        <h2>
          Total Cost to You: {totalLoans === "" || NaN ? "00,000" : totalLoans}
        </h2>
      </div>
    </div>
  );
};

export default Form;
