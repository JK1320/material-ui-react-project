import { alpha, AppBar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Mail, Notifications, Search } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
 logoLg: {
     display: "none",
     [theme.breakpoints.up("sm")]: {
         display: "block",
     }
 },
 logoSm: {
     display: "block",
      [theme.breakpoints.up("sm")]: {
         display: "none",
     }
 },
 search: {
     display: "flex",
     alignItems: "center",
     backgroundColor: alpha(theme.palette.common.white, 0.15),
     '&:hover' : {
         backgroundColor: alpha(theme.palette.common.white, 0.25)
     },
     borderRadius: theme.shape.borderRadius,
     width: "50%",
 },
 input: {
     color: "white",
     marginLeft: theme.spacing(1)
 }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar>
    <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>jk1320</Typography>
        <Typography variant="h6" className={classes.logoSm}>JK</Typography>
        <div className={classes.search}>
            <Search />
            <InputBase placeholder="search..." className={classes.input} />
        </div>
        <div className={classes.icons}>
            <Badge badgeContent={4} color="secondary">
                <Mail />
            </Badge>
             <Badge badgeContent={2} color="secondary">
                <Notifications />
            </Badge>
        </div>
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;