import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core/";

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
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 0,
    }
  }
}));

const WorkStudy = ({setWorkStudyForm}) => {
  const classes = useStyles();
  const [workStudy, setWorkStudy] = useState({
    workStudy: ""
  });

  const handleChange = event => {
    console.log(workStudy)
    setWorkStudy({
      ...workStudy,
      [event.target.name]: event.target.value
    });
  };
  useEffect(() => {
    const setWork = () => {
      setWorkStudyForm(workStudy);
    }
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
            // value={workStudy}
            onChange={handleChange}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default WorkStudy;
