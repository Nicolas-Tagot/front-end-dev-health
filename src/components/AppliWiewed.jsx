import React from "react";
import "./css.css";

class AppliWiewed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>
          {this.props.id}
          {this.props.historique.map((item) => (
            <div>
              {item.perso === 1 ? (
                <div className="etatG">{item.heure} : {item.response}</div>
              ) : null}
            </div>
          ))}
        </p>
      </div>
        /* <div className="etatG">
      <div className="etat R" ></div>
      <p className="centered">Bot send message to "Mum" for "News" etat= "mal"</p>
    </div>
      <div className="etatG">
        <div className="etat V" ></div>
        <p className="centered">" Mal" le Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etat V" ></div>
        <p className="centered">"Tout va bien" le Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etat V" ></div>
        <p className="centered">"Tout va bien" le Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etat V" ></div>
        <p className="centered">Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etat V" ></div>
        <p className="centered">Mardi 25 - 10:50</p>
      </div> */
    );
  }
}

export default AppliWiewed;
