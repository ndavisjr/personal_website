import useStyles from "./styles";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";

export default function Main(props) {
  const classes = useStyles();
  const { projects, title } = props;

  return (
    <Grid item xs={12} md={8} id="main.exampleprojects">
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Divider />

      {projects.map((post) => (
        <CardActionArea
          className={classes.cardActionArea}
          component="a"
          href={post.link}
          target="_blank"
          rel="noopener"
        >
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description.map((desc) => (
                    <Typography variant="subtitle1" className={classes.desc}>
                      &#8226; {desc}
                    </Typography>
                  ))}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  <Link href={post.link} target="_blank" rel="noopener">
                    {post.link}
                  </Link>
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.imageText}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  projects: PropTypes.array,
  title: PropTypes.string,
};
