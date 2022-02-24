import { Fab, makeStyles, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 10,
    }
}));

const Add = () => {
  const classes = useStyles();

  return (
    <>
    <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab}>
            <AddIcon />
        </Fab>
    </Tooltip>
    </>
  );
};

export default Add;