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

const WorkStudy = () => {
  const classes = useStyles();
  const formContext = useContext(FormContext);
  const { formError, handleError, schools } = formContext;
  const [workStudy, setWorkStudy] = useState({
    workStudy: ""
  });
  const handleChange = event => {
    setWorkStudy({
      ...workStudy,
      [event.target.name]: event.target.value
    });
  };
  return (
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
    </Grid>
  );
};

export default WorkStudy;
