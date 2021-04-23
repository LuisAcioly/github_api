import './App.css';
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/favorites">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
