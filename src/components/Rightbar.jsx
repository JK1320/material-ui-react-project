import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{marginBottom: 20}}>
        <Avatar alt="Remy Sharp" src="./images/my.jpg" />
        <Avatar alt="Travis Howard" src="./images/my.jpg" />
        <Avatar alt="Cindy Baker" src="./images/my.jpg" />
        <Avatar alt="Agnes Walker" src="./images/my.jpg" />
        <Avatar alt="Trevor Henderson" src="./images/my.jpg" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList cols={3} rowHeight={100} style={{marginBottom: 20}}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
       <Link href="#" variant="body2" className={classes.link}>
       Sport
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
       Food
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
       Music
      </Link>
      <Divider flexItem style={{marginBottom: 5}} />
      <Link href="#" variant="body2" className={classes.link}>
       Movies
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
       Science
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
       Life
      </Link>
    </Container>
  );
};

export default Rightbar;
