import React, { useState, useContext, useEffect } from "react";
import FormContext from "../../components/context/FormContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, Grid } from "@material-ui/core/";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    borderRadius: "0px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
    
  },
  selectInput: {
    width: "200px"
  }
}));

const FederalLoans = () => {
  const classes = useStyles();
  const formContext = useContext(FormContext);
  const { formError, handleError, totalFederalLoans, setTotalFedLoans } = formContext;
  const [fedLoans, setFedLoans] = useState({
    subsidizedFedLoan: "",
    unsubsidizedFedLoan: ""
  });
//destructuring
const {subsidizedFedLoan, unsubsidizedFedLoan } = fedLoans;

  const handleChange = event => {
    setFedLoans({
      ...fedLoans,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    const sumFedLoans = parseInt(subsidizedFedLoan) + parseInt(unsubsidizedFedLoan) ;
    const displayFedLoans = () => {
        if (sumFedLoans >= 0) {
          setTotalFedLoans(sumFedLoans);
          console.log(sumFedLoans)
        } else {
            setTotalFedLoans(0)
        }
      };
      displayFedLoans();
  }, [fedLoans])
  return (
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
        <h2>
          Total Federal Loans: {totalFederalLoans === "" || NaN ? "00,000" : totalFederalLoans}
          
        </h2>
      </div>
    </Grid>
  );
};

export default FederalLoans;
