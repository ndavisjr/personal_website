import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    card: {
        display: 'flex',
        width: '100%',
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 200,
      },
      cardActionArea: {
        marginTop: "10px",
      },
      detailsHeader: {
        marginTop: "15px", 
      },
      chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(0.3),
        },
      },
}));