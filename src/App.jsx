import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        startIcon={<Person />}
      >
        Material UI
      </Button>
    </div>
  );
};

export default App;
