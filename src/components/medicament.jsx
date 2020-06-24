import React from 'react';
import "./css.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function AppliWiewed() {
  return (
    <div>
      <div className="etatG">
        <div className="etat Y" ></div>
        <p className="centered">prise du médicament - Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etat R" ></div>
        <p className="centered">Oublie médicament - Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etat V" ></div>
        <p className="centered">Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etat Y" ></div>
        <p className="centered">Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etat Y" ></div>
        <p className="centered">Mardi 25 - 10:50</p>
      </div>
    </div>
  );
}

export default AppliWiewed;
