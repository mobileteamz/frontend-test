import React, { useState, useContext, useEffect } from "react";
import FormContext from "../../components/context/FormContext";
import GrantScholarship from "./GrantsScholarship";
import WorkStudy from "./WorkStudy";
import School from "./School";
import FederalLoans from "./FederalLoans";
//form padre que contiene el form, crea un state para cada hijo y trae los states de cada uno con un setter

const Form = () => {
  //llamo al context
  const formContext = useContext(FormContext);
  //destructuring context
  const {
    formError,
    handleError,
    setTotalCost,
    totalCost,
    sendForm
  } = formContext;
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

  //manejo el submit
  const handleSubmit = event => {
    event.preventDefault();
    //valido que ningun campo esté vacío
    if (
      selectedSchool.trim() === "" ||
      admission.trim() === "" ||
      attendance === "" ||
      institutionOnNeed === "" ||
      institutionNotOnNeed === "" ||
      government === "" ||
      privateLoan === "" ||
      subsidizedFedLoan === "" ||
      unsubsidizedFedLoan === "" ||
      workStudy.workStudy === ""
    ) {
      //si alguna condición es true, llamo al reducer y paso formError a true
      handleError();
      return;
    }
    sendForm();
    console.log("succes");
  };
  //hook para calcular el costo total
  useEffect(() => {
    const setTotal = () => {
      setTotalCost();
    };
    setTotal();
  }, [fedLoans, grantsScholarship]);
  return (
    <div>
      <h1 id="head" className="title">Your Financial Aid Offer</h1>
      <form onSubmit={handleSubmit}>
        <School setSchoolForm={setSchoolForm} />
        <div className="brakeline">
          <h2 className="subtitle">Grants and Scholarships</h2>
          <hr />
        </div>

        <p className="parrafo">
          Add the details of the money you don´t have to pay back: school grants
          and scholarships, federal grants and private grants.
        </p>
        <GrantScholarship setGrantsScholarship={setGrantsScholarship} />
        <div className="brakeline">
          <h2 className="subtitle">Federal Students Loans</h2>
          <hr />
        </div>
        <p className="parrafo">
          Add the loans you have to pay back: federal student loans
        </p>

        <FederalLoans setFedForm={setFedForm} />
        <div className="brakeline">
          <h2 className="subtitle">Work Study Programs</h2>
          <hr />
        </div>
        <p className="parrafo">
          Add the details of the money your student can earn: work study amount
        </p>

        <div className="title">
          <WorkStudy setWorkStudyForm={setWorkStudyForm} />
          <br />
        </div>
        <div>
          <h1>
            Total Cost to You:{" "}
            {totalCost === 0 ? "   $00,000" : `$${totalCost}`}
          </h1>
          <br />
          <br />
          <br />
        </div>
        {formError ? (
          <p className="error">Must fill every field.</p>
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
