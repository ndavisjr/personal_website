import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Sidebar(props) {
  const classes = useStyles();
  const { contactLocation, contactName, contactEmail, contactPhone, school,
     dateRange, description, social, title } = props;

  return (
    <Grid item xs={12} md={4} id="sidebar.education">
      <Paper elevation={0} className={classes.sidebarAboutBox} >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.schoolName}>{school}</Typography>
        <Typography>{dateRange}</Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Paper elevation={0} className={classes.sidebarAboutBox2} >
        <Typography variant="h6" gutterBottom>
          Contact
        </Typography>
        <Typography className={classes.schoolName}>{contactName}</Typography>
        <Typography>Email: {contactEmail}</Typography>
        <Typography>Phone: {contactPhone}</Typography>
        <Typography>Location: {contactLocation}</Typography>
      </Paper>     
      
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href={network.link} key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
  contactLocation: PropTypes.string,
  contactName: PropTypes.string,
  contactEmail: PropTypes.string,
  contactPhone: PropTypes.string,
  school: PropTypes.string,
  dateRange: PropTypes.string,
};