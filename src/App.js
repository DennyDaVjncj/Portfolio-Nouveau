import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProminentAppBar from './particles/Header';
import SpacingGrid from './prjctsPage';
import HomePage from './homePage';

function App() {
  return (
    <Router basename="/">
      <ProminentAppBar/>
      <Switch>
         {/*navigation needed for homepage  */}
        <Route exact path='/'component={HomePage}/>
        <Route exact path='/portfolio'component={SpacingGrid}/>      
      </Switch>
    </Router>
  );
}
export default App; 