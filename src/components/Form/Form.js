import React, { useState, useContext, useEffect } from "react";
import FormContext from "../../components/context/FormContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, Grid } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1
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
  const [ totalGrantAndScholarLoan, setTotalGrantAndScholarLoan ] = useState("");
  const [ totalFedLoans, setTotalFedLoans ] = useState("");
  const [ totalLoans, setTotalLoans ] = useState("");
  const [form, setForm] = useState({
    school: "",
    admision: "",
    attendance: "",
    institutionOnNeed: "",
    institutionNotOnNeed: "",
    government: "",
    privateLoan: "",
    subsidizedFedLoan: "",
    unsubsidizedFedLoan: "",
    workStudy: ""
    // totalGrantScholarship: institutionOnNeed +  institutionNotOnNeed + government + privateLoan
  });
  //destructuring para mejor manejo de variables y no repetir codigo
  const {
    school,
    admision,
    attendance,
    institutionNotOnNeed,
    institutionOnNeed,
    government,
    privateLoan,
    subsidizedFedLoan,
    unsubsidizedFedLoan,
    workStudy
  } = form;
  //seteo el value del form a su state
  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  //use effect para actualizar la suma total  de prestamos
  useEffect(() => {
    const sumGrantAndScholarLoan =
    parseInt(institutionOnNeed) +
    parseInt(institutionNotOnNeed) +
    parseInt(government) +
    parseInt(privateLoan) 
    const sumFedLoans = 
    parseInt(subsidizedFedLoan) +
    parseInt(unsubsidizedFedLoan) ;

    const displayGrantAndScholarLoan = () => {
      if (sumGrantAndScholarLoan >= 0) {
        setTotalGrantAndScholarLoan(sumGrantAndScholarLoan);
      } else {
        setTotalGrantAndScholarLoan("")
      }
    };
    const displayFedLoans = () => {
      if (sumFedLoans >= 0) {
        setTotalFedLoans(sumFedLoans);
      } else {
        setTotalFedLoans("")
      }
    };
    const displayTotalLoan = () => {
      if (sumGrantAndScholarLoan >= 0) {
        setTotalLoans(sumGrantAndScholarLoan + sumFedLoans + parseInt(workStudy));
      } else {
        setTotalLoans("")
      }
    };
    
    displayGrantAndScholarLoan();
    displayFedLoans();
    displayTotalLoan();
  }, [form]);

  return (
    <div className={classes.root}>
      <h1 className="title">Your Financial Aid Offer</h1>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div>
            <p>Select the school</p>
          </div>
          <div>
            <Autocomplete
              id="combo-box-demo"
              // className={classes.textField}
              options={schools}
              getOptionLabel={school => school.school}
              style={{ width: 200 }}
              size="small"
              onInputChange={handleChange}
              onChange={handleChange}
              value={school}
              onChange={handleChange}
              inputValue={school}
              onInputChange={handleChange}
              name="school"
              renderInput={params => (
                <TextField {...params} label="" variant="outlined" />
              )}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div>
            <p>Admision Type</p>
          </div>
          <TextField
            id="outlined-select-currency-native"
            select
            name="admision"
            label="Select    "
            value={admision}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className={classes.selectInput}
            onChange={handleChange}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <p>Total cost of attendance</p>
          </div>
          <TextField
            id="outlined-basic"
            size="small"
            label="$"
            variant="outlined"
            name="attendance"
            value={attendance}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <h2>Grants and Scholarships</h2>
      <hr />
      <p>
        Add the details of the money you don´t have to pay back: school grants
        and scholarships, federal grants and private grants.
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div>
            <h3 style={{ width: "100%" }}>Institution</h3>
            <p>
              Total grants and scholarships based
              <br /> on financial need
            </p>
          </div>
          <div>
            <TextField
              type="number"
              id="outlined-basic"
              label="$"
              variant="outlined"
              display="inline"
              size="small"
              value={parseInt(form.institutionOnNeed)}
              name="institutionOnNeed"
              onChange={handleChange}
            />
          </div>
          <div>
            <Checkbox
            id="onNeed"
              display="block"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={handleChange}
            />
            <span>Yes, it´s reneweable.</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <p>
              <br />
              <br />
              Total grants and scholarships NOT based
              <br /> on financial needs
            </p>
          </div>
          <div>
            <TextField
              type="number"
              id="outlined-basic"
              label="$"
              variant="outlined"
              display="inline"
              size="small"
              name="institutionNotOnNeed"
              value={institutionNotOnNeed}
              onChange={handleChange}
            />
          </div>

          <div>
            <Checkbox
            id="notBasedOnNeeds"
              display="block"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={handleChange}
            />
            <span>Yes, it´s reneweable.</span>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div>
            <h3>Government</h3>
            <p>Total pell and state grants</p>
          </div>
          <div>
            <TextField
              type="number"
              id="outlined-basic"
              label="$"
              variant="outlined"
              display="inline"
              size="small"
              name="government"
              value={government}
              onChange={handleChange}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <h3>Private</h3>
            <p>Total private scholarship</p>
          </div>
          <div>
            <TextField
              type="number"
              id="outlined-basic"
              label="$"
              variant="outlined"
              display="inline"
              size="small"
              name="privateLoan"
              value={privateLoan}
              onChange={handleChange}
            />
          </div>
          <div>
            <Checkbox
            id="privateScholarship"
              display="block"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={handleChange}
            />
            <span>Yes, it´s reneweable.</span>
          </div>
        </Grid>
        <div>
          <h2 className="title">
            Total Grants & Scholarships: {totalGrantAndScholarLoan === "" || NaN ? "00,000" : totalGrantAndScholarLoan }
            
          </h2>
        </div>
      </Grid>
      <div>
        <h2>Federal Students Loans</h2>
        <p>Add the loans you have to pay back: federal student loans</p>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div>
            <p>Total subsidized federal loans</p>
          </div>
          <div>
            <TextField
              type="number"
              id="outlined-basic"
              label="$"
              variant="outlined"
              display="inline"
              size="small"
              name="subsidizedFedLoan"
              value={subsidizedFedLoan}
              onChange={handleChange}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <p>Total unsubsidized federal loans</p>
          </div>
          <div>
            <TextField
              type="number"
              id="outlined-basic"
              label="$"
              variant="outlined"
              display="inline"
              size="small"
              name="unsubsidizedFedLoan"
              value={unsubsidizedFedLoan}
              onChange={handleChange}
            />
          </div>
        </Grid>
        <div>
          <h2>Total Federal Loans: {totalFedLoans === "" || NaN ? "00,000" : totalFedLoans }</h2>
        </div>
      </Grid>

      <div>
        <h2>Work Study Programs</h2>
        <p>
          Add the details of the money your student can earn: work study amount
        </p>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div>
            <h4>Work study</h4>
          </div>
          <div>
            <TextField
              type="number"
              id="outlined-basic"
              label="$"
              variant="outlined"
              display="inline"
              size="small"
              name="workStudy"
              value={workStudy}
              onChange={handleChange}
            />
          </div>
        </Grid>
        <div>
          <h2>Total Cost to You: {totalLoans === "" || NaN ? "00,000" : totalLoans }</h2>
        </div>
      </Grid>
    </div>
  );
};

export default Form;
