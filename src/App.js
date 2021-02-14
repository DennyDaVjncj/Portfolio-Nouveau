import './App.css';
import Nav from './particles/Nav';
import HomePage from './HomePage';
import Contact from "./Contact";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}
export default App;
//this is where routing will be handled