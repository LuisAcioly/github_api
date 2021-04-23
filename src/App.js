import './App.css';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites'
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
