import React from "react";
import "./css.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Suivis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <div>
      //   {this.props.id}
      //   <div className="etatG">
      //     <div className="etat V" ></div>
      //     <p className="centered"> Taux insuline: 30mg - Mardi 25 - 10:50</p>
      //   </div>
      //   <div className="etatG">
      //     <div className="etat V" ></div>
      //     <p className="centered">Taux insuline: 30mg  - Mardi 25 - 10:50</p>
      //   </div>
      //   <div className="etatG">
      //     <div className="etat V" ></div>
      //     <p className="centered">Taux insuline: 30mg - 10:50</p>
      //   </div>
      //   <div className="etatG">
      //     <div className="etat V" ></div>
      //     <p className="centered">Taux insuline: 30mg  - 10:50</p>
      //   </div>
      //   <div className="etatG">
      //     <div className="etat V" ></div>
      //     <p className="centered">prise du poids : 60kg - 10:50</p>
      //   </div>
      //   <div className="etatG">
      //     <div className="etat Y" ></div>
      //     <p className="centered">Taux insuline: 30mg - 10:50</p>
      //   </div>
      // </div>

      <div>
        <p>
          {this.props.id}
          {this.props.historique.map((item) => (
            <div>
                <div className="etatG">{item.heure} : {item.response}</div>
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default Suivis;
