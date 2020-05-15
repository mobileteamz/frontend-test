import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core/";
//estilo de los componenetes de material ui
const useStyles = makeStyles(theme => ({
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
  }
}));

const School = ({ setSchoolForm }) => {
  //llamo a los estilos
  const classes = useStyles();
  //declaro el state
  const [school, setSchool] = useState({
    selectedSchool: "",
    admission: "",
    attendance: ""
  });
  //destruturing
  const { selectedSchool, admission, attendance } = school;
  //manejo los cambios en los inputs
  const handleChange = event => {
    setSchool({
      ...school,
      [event.target.name]: event.target.value
    });
  };
  //ante cambios mando al from padre los valores
  useEffect(() => {
    const sendSchoolToForm = () => {
      setSchoolForm(school);
    };
    sendSchoolToForm();
  }, [school]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <div>
          <p>Select the school</p>
        </div>
        <div>
          <TextField
            id="outlined-select-currency-native"
            select
            name="selectedSchool"
            label="Select"
            variant="outlined"
            size="small"
            className={classes.selectInput}
            onChange={handleChange}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
            <option value="7">Option 7</option>
            <option value="8">Option 8</option>
            <option value="9">Option 9</option>
            <option value="10">Option 10</option>
          </TextField>
        </div>
      </Grid>

      <Grid item xs={12} sm={4}>
        <div>
          <p>Admission Type</p>
          <TextField
            id="outlined-select-currency-native"
            select
            name="admission"
            label="Select"
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
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div>
          <p>Total cost of attendance</p>
        </div>
        <TextField
          className={classes.textField}
          size="small"
          label="$"
          variant="outlined"
          name="attendance"
          value={attendance}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default School;
