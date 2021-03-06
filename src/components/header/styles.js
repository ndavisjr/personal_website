import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    nameLabel: {
      fontStyles : 'italic',
    },
    large: {
      marginRight: '15px',
    },
  }));