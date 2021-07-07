import useStyles from './styles';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';


export default function Experience(props) {
  const classes = useStyles();
  const { title, professionalExp } = props;

  return (
    <Grid item xs={12} md={8} id="experience.projects" className={classes.root}>
        <Typography variant="h6" gutterBottom>
            {title}
        </Typography>

        <Divider />

        
        {professionalExp.map((post) => (
            <CardActionArea className={classes.cardActionArea} component="a" href={post.link} target="_blank" >
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                <CardContent>
                    <Typography component="h2" variant="h5">
                    {post.title}
                    </Typography>

                    <Typography variant="subtitle1">
                    {post.employer}
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary">
                    {post.date}
                    </Typography>

                    <Typography variant="h6" className={classes.detailsHeader}>
                    Responsibilities:
                    </Typography>
                    {post.details.map((desc) => (
                    <Typography variant="subtitle1" className={classes.desc}>
                      &#8226; {desc}
                    </Typography>
                    ))}

                    <Typography variant="h6" className={classes.detailsHeader}>
                    Technologies Used:
                    </Typography>
                    <div className={classes.chips}>
                        {post.techUsed.map((lang) => (
                        <Chip label={lang} />
                        ))} 
                    </div>                  

                    <Typography variant="subtitle1" color="primary" className={classes.detailsHeader}>
                    <Link href={post.link} target="_blank" rel="noopener" >{post.link}</Link>
                    </Typography>
                </CardContent>
                </div>
            </Card>
            </CardActionArea>
        ))}
    </Grid>
  );
}

Experience.propTypes = {
    title: PropTypes.string,
    professionalExp: PropTypes.array,
};