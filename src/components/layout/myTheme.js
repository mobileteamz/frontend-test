import {
  makeStyles
} from "@material-ui/core/styles";
//custom styles

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

export default useStyles;
