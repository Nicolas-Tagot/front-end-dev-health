import React from 'react';
import './App.css';
import Menu from './components/menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
       <Route path="/">
        <Menu />
       </Route>
     </Switch>
   </Router>
    </div>
  );
}

export default App;
