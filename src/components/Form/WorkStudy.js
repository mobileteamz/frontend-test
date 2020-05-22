import React, { useState, useEffect, useContext } from "react";
import { TextField, Grid } from "@material-ui/core/";
import FormContext from "./context/FormContext";
import useStyles from "../layout/myTheme";

const WorkStudy = ({ setWorkStudyForm, emptyFields }) => {
  const classes = useStyles();
  //llamo al context
  const formContext = useContext(FormContext);
  //destructuring context
  const { setWorkStudyContext } = formContext;
  //declaro state de error
  const [invalid, setInvalid] = useState(false);
  //state form local
  const [workStudy, setWorkStudy] = useState("");
  //manejo los cambios en los inputs
  const handleChange = event => {
    setWorkStudy((event.target.name = event.target.value));
  };
  ////función para recibir los campos vacios y activar el error
  useEffect(() => {
    if (emptyFields.length !== 0) {
      setInvalid(true);
    }
  }, [emptyFields]);
  //mando state local al form padre
  useEffect(() => {
    const setWork = () => {
      setWorkStudyForm(workStudy);
      setWorkStudyContext(parseInt(workStudy));
    };
    setWork();
  }, [workStudy]);
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <div>
          <h4>Work study</h4>
        </div>
        <div>
          <TextField
            type="number"
            className={classes.textField}
            label="$"
            variant="outlined"
            display="inline"
            size="small"
            name="workStudy"
            error={workStudy === "" ? invalid : null}
            // value={workStudy}
            onChange={handleChange}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default WorkStudy;
