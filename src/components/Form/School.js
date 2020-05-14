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
      width: "25ch",
      borderRadius: "50%"
    },
    selectInput: {
      width: "200px"
    }
  }));

const School = () => {
    const classes = useStyles();
    const formContext = useContext(FormContext);
    const { formError, handleError, schools } = formContext;
    const [ school, setSchool ] = useState({
        selectedSchool: "",
        admision: "",
        attendance: ""
    });
    //destruturing
    const { selectedSchool, admision, attendance } = school;
    const handleChange = event => {
        setSchool({
          ...school,
          [event.target.name]: event.target.value
        });
      };
    return ( 
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div>
            <p>Select the school</p>
          </div>
          <div>
            {/* <Autocomplete
              id="combo-box-demo"
              className={classes.textField}
              options={schools}
              getOptionLabel={schools => schools.school}
              style={{ width: 200 }}
              size="small"
              onInputChange={handleChange}
              onChange={handleChange}
              value={selectedSchool}
              onChange={handleChange}
              inputValue={selectedSchool}
              onInputChange={handleChange}
              name="school"
              renderInput={params => (
                <TextField {...params} label="" variant="outlined" />
              )}
            /> */}
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
            label="Select"
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

     );
}
 
export default School;