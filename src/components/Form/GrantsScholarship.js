import React, { useState, useContext, useEffect } from "react";
import FormContext from "../../components/context/FormContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, Grid } from "@material-ui/core/";

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

const GrantScholarship = () => {
  const classes = useStyles();
  const formContext = useContext(FormContext);
  const {
    formError,
    handleError,
    totalGrantsScholarships,
    setTotalGrantsScholarships
  } = formContext;
  const [grantAndScholarLoan, setGrantAndScholarLoan] = useState({
    institutionOnNeed: "",
    institutionNotOnNeed: "",
    government: "",
    privateLoan: ""
  });
  //destruncturing
  const {
    institutionOnNeed,
    institutionNotOnNeed,
    government,
    privateLoan
  } = grantAndScholarLoan;
  const handleChange = event => {
    setGrantAndScholarLoan({
      ...grantAndScholarLoan,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    const sumGrantAndScholarLoan =
      parseInt(institutionOnNeed) +
      parseInt(institutionNotOnNeed) +
      parseInt(government) +
      parseInt(privateLoan);
    const displayGrantAndScholarLoan = () => {
      if (sumGrantAndScholarLoan >= 0) {
        setTotalGrantsScholarships(sumGrantAndScholarLoan);
      } else {
        setTotalGrantsScholarships(0);
      }
    };
    displayGrantAndScholarLoan();
  }, [grantAndScholarLoan]);

  const renewable = event => {
    let id = event.target.id;
    console.log(id);
    switch (id) {
      case "onNeed":
        return setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          institutionOnNeed: institutionOnNeed * 4
        });
        
      case "notOnNeeds":
        return setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          institutionNotOnNeed: institutionNotOnNeed * 4
        });
        
      case "private":
        return setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          privateLoan: privateLoan * 4
        });
        
      default:
        return null;
    }
  };
  return (
    <div className={classes.root}>
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
              value={institutionOnNeed}
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
              onChange={event => renewable(event)}
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
              id="notOnNeeds"
              display="block"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={event => renewable(event)}
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
              id="government"
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
              id="private"
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
              id="private"
              display="block"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={event => renewable(event)}
            />
            <span>Yes, it´s reneweable.</span>
          </div>
        </Grid>
        <div>
          <h2 className="title">
            Total Grants & Scholarships:
            {totalGrantsScholarships === "" || NaN
              ? "00,000"
              : totalGrantsScholarships}
          </h2>
        </div>
      </Grid>
    </div>
  );
};

export default GrantScholarship;
