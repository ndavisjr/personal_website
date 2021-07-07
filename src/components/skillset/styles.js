import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    accordion: {
      marginTop: "10px",
    },
    chips: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
  },
}));