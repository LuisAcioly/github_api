import './App.css';
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
