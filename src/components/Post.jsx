import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        }
    },
    card: {
        marginBottom: theme.spacing(5),
    }
}));

const Post = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">My First Post</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quo a voluptatibus sint dolorem vel magni delectus ipsam harum eius
            praesentium unde architecto sapiente soluta mollitia laborum
            inventore, exercitationem omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quo a voluptatibus sint dolorem vel magni delectus ipsam harum eius
            praesentium unde architecto sapiente soluta mollitia laborum
            inventore, exercitationem omnis.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Post;