import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProminentAppBar from './particles/Header';
import Portfolio from './prjctsPage.js';
import HomePage from './HomePage.js';

function App() {
  return (
    <Router basename="/">
      <ProminentAppBar/>
      <Switch>
        <Route exact path='/'component={HomePage}/> 
        <Route exact path='/portfolio'component={Portfolio}/>      
      </Switch>
    </Router>
  );
}
export default App;