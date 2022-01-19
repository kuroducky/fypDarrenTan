import Nav from './components/Nav';
import Home from './components/pages/Home';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
        <Nav/>
        <Switch>
          <Route path = "/" exact component={Home} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
