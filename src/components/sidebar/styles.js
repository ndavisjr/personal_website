import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarAboutBox2: {
    marginTop: "10px",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  schoolName: {
    fontWeight: 'bold',
  },
}));