import React from 'react';
import './App.css';
import Menu from './components/menu';
import Patient from './components/Patient';
import Mobile from './components/mobile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChatBotDiabet from "./components/ChatbotDiabet";
import ChatbotPregnant from "./components/ChatbotPregnant";

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route path="/demo">
       <Mobile />
       </Route> 
       <Route path="/doc">
        <Menu />
       </Route>
       <Route path="/">
         <Patient/>
       </Route>
       
     </Switch>
   </Router>
      {/* <ChatBotDiabet />
      <ChatbotPregnant /> */}
    </div>
  );
}

export default App;
