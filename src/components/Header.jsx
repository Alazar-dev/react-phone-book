import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
// import MenuIcon from '@material-ui/icons/Menu;'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textAlign: 'center',
        marginLeft: 550
    }
}))

const Header = () => {

    const classes = useStyles();
    return ( 
        <AppBar className={classes.root}>
            <ToolBar>
                <IconButton>
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    Phone Book
                </Typography>
            </ToolBar>
        </AppBar>
     );
}
 
export default Header;