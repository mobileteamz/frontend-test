import React, { useState, useContext, useEffect } from "react";
import FormContext from "./context/FormContext";
import { TextField, Checkbox, Grid } from "@material-ui/core/";
import useStyles from "../layout/myTheme";

const GrantScholarship = ({ setGrantsScholarship, emptyFields }) => {
  const classes = useStyles();
  //llamo al context
  const formContext = useContext(FormContext);
  //destructuring context
  const { totalGrantsScholarships, setTotalGrantsScholarships } = formContext;
  const [invalid, setInvalid] = useState(false);
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
      parseInt(institutionOnNeed || 0) +
      parseInt(institutionNotOnNeed || 0) +
      parseInt(government || 0) +
      parseInt(privateLoan || 0);
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
  //función para recibir los campos vacios y activar el error
  useEffect(() => {
    if (emptyFields.length !== 0) {
      setInvalid(true);
    }
  }, [emptyFields]);
  //tres funciones que multiplican respectivos inputs al seleccionar checkbox
  //1

  const multiplyNotOnNeed = event => {
    !notOnNeeds
      ? setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          institutionNotOnNeed: institutionNotOnNeed * 4
        })
      : setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          institutionNotOnNeed: institutionNotOnNeed / 4
        });
    //seteo el state de los checkbox
    setIsRenewable({
      ...isRenewable,
      [event.target.id]: event.target.checked
    });
  };

  //2

  const multiplyOnNeed = event => {
    !onNeed
      ? setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          institutionOnNeed: institutionOnNeed * 4
        })
      : setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          institutionOnNeed: institutionOnNeed / 4
        });
    setIsRenewable({
      ...isRenewable,
      [event.target.id]: event.target.checked
    });
  };

  //3

  const multiplyPrivate = event => {
    !privateRenew
      ? setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          privateLoan: privateLoan * 4
        })
      : setGrantAndScholarLoan({
          ...grantAndScholarLoan,
          privateLoan: privateLoan / 4
        });
    setIsRenewable({
      ...isRenewable,
      [event.target.id]: event.target.checked
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div>
            <h3 style={{ width: "100%" }}>Institution</h3>
            <p>
              Total grants and scholarships based
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
              // value={institutionOnNeed}
              error={institutionOnNeed === "" ? invalid : null}
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
              onChange={multiplyOnNeed}
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
              error={institutionNotOnNeed === "" ? invalid : null}
              // value={institutionNotOnNeed}
              onChange={handleChange}
            />
          </div>

          <div>
            <Checkbox
              id="notOnNeeds"
              display="block"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={multiplyNotOnNeed}
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
              error={government === "" ? invalid : null}
              // value={government}
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
              id="privateRenew"
              label="$"
              variant="outlined"
              display="inline"
              size="small"
              name="privateLoan"
              error={privateLoan === "" ? invalid : null}
              // value={privateLoan}
              onChange={handleChange}
            />
          </div>
          <div>
            <Checkbox
              id="privateRenew"
              display="block"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={multiplyPrivate}
            />
            <span>Yes, this will reduce my aid.</span>
          </div>
        </Grid>
        <div className="title flex">
          <h2 className="subtitle">Total Grants & Scholarships: </h2>
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
