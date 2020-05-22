import React, { useState, useContext, useEffect } from "react";
import { TextField, Grid } from "@material-ui/core/";
import FormContext from "./context/FormContext";
import useStyles from "../layout/myTheme";

const School = ({ setSchoolForm, emptyFields }) => {
  //llamo a los estilos
  const classes = useStyles();
  //llamo al context
  const formContext = useContext(FormContext);
  //destructuring context
  const { setAttendance } = formContext;
  //state de error
  const [invalid, setInvalid] = useState(false);
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
    console.log(emptyFields.includes("selectedSchool"));
  };
  //función para recibir los campos vacios y activar el error
  useEffect(() => {
    if (emptyFields.length !== 0) {
      setInvalid(true);
    }
  }, [emptyFields]);
  //ante cambios mando al from padre los valores
  useEffect(() => {
    const sendSchoolToForm = () => {
      setSchoolForm(school);
      setAttendance(parseInt(attendance));
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
            error={selectedSchool === "" ? invalid : null}//condicion que valida
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
            error={admission === "" ? invalid : null}
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
          error={attendance === "" ? invalid : null}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default School;
