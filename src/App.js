import './App.css';
import Header from './particles/Header';
import HomePage from './HomePage';
import Contact from "./Contact";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}
export default App;