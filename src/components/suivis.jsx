import React from 'react';
import "./css.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Suivis() {
  return (
    <div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered"> Taux insuline: 30mg - Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">Taux insuline: 30mg  - Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">Taux insuline: 30mg - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">Taux insuline: 30mg  - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">prise du poids : 60kg - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">Taux insuline: 30mg - 10:50</p>
      </div>
    </div>
  );
}

export default Suivis;
