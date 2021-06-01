import './App.css';
import MediaCard from './HomePage';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProminentAppBar from './particles/Header';
import SpacingGrid from './prjctsPage';

function App() {
  return (
    <Router basename="/">
      <ProminentAppBar/>
      <Switch>
        <Route exact path='/' component={MediaCard}/> 
        <Route exact path='/portfolio'component={SpacingGrid}/>      
      </Switch>
    </Router>
  );
}
export default App; 