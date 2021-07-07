import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
      },
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
      desc: {
        fontSize: 13,
      }
}));