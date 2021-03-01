import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/Home'
import Navigation from './components/Navigation'
import Tasks from './components/pages/Tasks';
import Todo from './components/pages/Todo';

const useStyles = makeStyles((theme) =>({
  root: {
    width: 700,
    marginTop: 175
  },
  tables: {
    marginLeft: 500,
  }
})) 
function App() {

  const classes = useStyles();
  return (
    <Router>
      <Navigation />
      <div className={classes.root}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Tasks" component={Tasks} /> 
            <Route exact path="/Todo" component={Todo} />         
          </Switch>
      </div>    
    </Router>

  );
}

export default App;
