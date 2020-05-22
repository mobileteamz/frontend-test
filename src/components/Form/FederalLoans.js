import React, { useState, useContext, useEffect } from "react";
import FormContext from "./context/FormContext";
import { TextField, Grid } from "@material-ui/core/";
import useStyles from "../layout/myTheme";

const FederalLoans = ({ setFedForm, emptyFields }) => {
  const classes = useStyles();
  //llamo al context
  const formContext = useContext(FormContext);
  //destructuring context
  const { totalFederalLoans, setTotalFedLoans } = formContext;

  const [invalid, setInvalid] = useState(false);
  //state del form local
  const [fedLoans, setFedLoans] = useState({
    subsidizedFedLoan: "",
    unsubsidizedFedLoan: ""
  });
  //destructuring
  const { subsidizedFedLoan, unsubsidizedFedLoan } = fedLoans;
  //manejo los cambios en los inputs
  const handleChange = event => {
    setFedLoans({
      ...fedLoans,
      [event.target.name]: event.target.value
    });
  };
  //función para recibir los campos vacios y activar el error
  useEffect(() => {
    if (emptyFields.length !== 0) {
      setInvalid(true);
    }
  }, [emptyFields]);
  //sumo el total de los inputs
  useEffect(() => {
    const sumFedLoans =
      parseInt(subsidizedFedLoan || 0) + parseInt(unsubsidizedFedLoan || 0);
    const displayFedLoans = () => {
      if (sumFedLoans >= 0) {
        setTotalFedLoans(sumFedLoans);
      } else {
        setTotalFedLoans(0);
      }
    };
    //mando data al form padre
    const setFed = () => {
      setFedForm(fedLoans);
    };
    setFed();
    displayFedLoans();
  }, [fedLoans]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <div>
          <p>Total subsidized federal loans</p>
        </div>
        <div>
          <TextField
            type="number"
            className={classes.textField}
            label="$"
            variant="outlined"
            display="inline"
            size="small"
            name="subsidizedFedLoan"
            error={subsidizedFedLoan === "" ? invalid : null}
            // value={subsidizedFedLoan}
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
            className={classes.textField}
            label="$"
            variant="outlined"
            display="inline"
            size="small"
            name="unsubsidizedFedLoan"
            error={unsubsidizedFedLoan === "" ? invalid : null}
            // value={unsubsidizedFedLoan}
            onChange={handleChange}
          />
        </div>
      </Grid>
      <div className="title flex">
        <h2 className="subtitle">Total Federal Loans: </h2>
        {/* condicional para mostrar el resultado de la suma de los inputs */}
        <h2>{totalFederalLoans === 0 ? "$00,000" : `$${totalFederalLoans}`}</h2>
      </div>
    </Grid>
  );
};

export default FederalLoans;
