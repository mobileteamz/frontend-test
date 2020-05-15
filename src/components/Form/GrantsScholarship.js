import React, { useState, useContext, useEffect } from "react";
import FormContext from "../../components/context/FormContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, Grid } from "@material-ui/core/";
//style para modificar componenetes de material ui
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
    [`& fieldset`]: {
      borderRadius: 0
    }
  },
  selectInput: {
    width: "200px",
    [`& fieldset`]: {
      borderRadius: 0
    }
  },
  
}));

const GrantScholarship = ({ setGrantsScholarship }) => {
  const classes = useStyles();
  //llamo al context
  const formContext = useContext(FormContext);
  //destructuring context
  const { totalGrantsScholarships, setTotalGrantsScholarships } = formContext;
  //state para multiplicar valores de ciertos inputs
  const [isRenewable, setIsRenewable] = useState({
    onNeed: false,
    notOnNeeds: false,
    privateRenew: false
  });
  //state del form
  const [grantAndScholarLoan, setGrantAndScholarLoan] = useState({
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
  } = grantAndScholarLoan;

  const { onNeed, notOnNeeds, privateRenew } = isRenewable;
  //manejo los cambios de los checkbox para multiplicar
  const handleRenewable = event => {
    setIsRenewable({
      ...isRenewable,
      [event.target.id]: event.target.checked
    });
  };
  //seteo el state del form
  const handleChange = event => {
    setGrantAndScholarLoan({
      ...grantAndScholarLoan,
      [event.target.name]: event.target.value
    });
  };
  //use effect para monitorear cambios y actualizar montos totales
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
    //función del padre, lleva los datos al form
    const setGrant = () => {
      setGrantsScholarship(grantAndScholarLoan);
    };
    setGrant();
    displayGrantAndScholarLoan();
  }, [grantAndScholarLoan]);
//tres funciones que multiplican ciertos inputs al seleccionar checkbox
//1
  useEffect(() => {
    const multiplyNotOnNeed = () => {
      notOnNeeds
        ? setGrantAndScholarLoan({
            ...grantAndScholarLoan,
            institutionNotOnNeed: institutionNotOnNeed * 4
          })
        : setGrantAndScholarLoan({
            ...grantAndScholarLoan,
            institutionNotOnNeed: institutionNotOnNeed / 4
          });
    };

    multiplyNotOnNeed();
  }, [notOnNeeds]);
//2
  useEffect(() => {
    const multiplyOnNeed = () => {
      onNeed
        ? setGrantAndScholarLoan({
            ...grantAndScholarLoan,
            institutionOnNeed: institutionOnNeed * 4
          })
        : setGrantAndScholarLoan({
            ...grantAndScholarLoan,
            institutionOnNeed: institutionOnNeed / 4
          });
    };
    multiplyOnNeed();
  }, [onNeed]);
//3
  useEffect(() => {
    const multiplyPrivate = () => {
      privateRenew
        ? setGrantAndScholarLoan({
            ...grantAndScholarLoan,
            privateLoan: privateLoan * 4
          })
        : setGrantAndScholarLoan({
            ...grantAndScholarLoan,
            privateLoan: privateLoan / 4
          });
    };
    multiplyPrivate();
  }, [privateRenew]);

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
              className={classes.textField}
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
              // onChange={event => renewable(event)}
              onChange={handleRenewable}
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
              className={classes.textField}
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
              onChange={handleRenewable}
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
              className={classes.textField}
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
              className={classes.textField}
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
              id="privateRenew"
              display="block"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={handleRenewable}
            />
            <span>Yes, this will reduce my aid.</span>
          </div>
        </Grid>
        <div className="title">
          <h2 className="subtitle">Total Grants & Scholarships:</h2>
          <span>
            <h2>
              {totalGrantsScholarships === 0
                ? "    $00,000"
                : `$${totalGrantsScholarships}`}
            </h2>
          </span>
        </div>
      </Grid>
    </div>
  );
};

export default GrantScholarship;
