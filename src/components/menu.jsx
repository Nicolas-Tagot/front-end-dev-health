import React from 'react';
import "./css.css";
import AppliWiewed from "./AppliWiewed";
import Suivis from "./suivis";
import Medics from "./medicament"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Menu() {
  return (
    <div>
    <Router>
      <div className="top">
        <div className="login"></div>
          <input className="champ" value="n° du patient" />
          <input type="button" className="valid" value="valider" />
        </div>
      <div className="centre">
        <div className="navigation">
          <Link to="/suivis"><input type="button" className="btnNav" value="Suivis"/></Link>
          <Link to="/medics"><input type="button" className="btnNav" value="Médicaments"/></Link>
          <Link to="/commentaires"><input type="button" className="btnNav" value="Commentaires"/></Link>
      </div>
      <div className="visual">

          <Switch>
          <Route path="/medics">
            <Medics />
        </Route>
            <Route path="/suivis">
              <Suivis />
          </Route>
          <Route path="/commentaires">
            <AppliWiewed />
        </Route>
        </Switch>

      </div>
      </div>
        </Router>
    </div>
  );
}

export default Menu;
