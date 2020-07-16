import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paperStyle: {
        marginTop: 20,
        padding: 20,
        width: 600,
        margin: 'auto',
    },
    square: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginTop: 10
    },
    btn: {
        textTransform: 'capitalize'
    },
    pos: {
        marginBottom: 12,
    },
    inputGrid: {
        margin: 'auto',
        width: 400
    },
    progress: {
        color: 'green',
        margin: 'auto',
    },
    detail: {
        marginBottom: -20
    }
}));

export default useStyles;