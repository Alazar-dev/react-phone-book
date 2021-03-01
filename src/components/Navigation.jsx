import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    marginLeft: 550,
  },
}));


const Nav = () => {
    const classes = useStyles();
    return (
      <AppBar className={classes.root}>
        <ToolBar>
          <Typography variant="h5" className={classes.title}>
            Phone Book
          </Typography>
        </ToolBar>
        <Tabs>
          <Link to="/Tasks">Tasks</Link>
          <Link to="/Todo"> Todo</Link>
        </Tabs>
      </AppBar>
    );
}
 
export default Nav;