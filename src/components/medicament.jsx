import React from "react";
import "./css.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
              <div className="etatG">
                {item.heure} : {item.response}
              </div>
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default AppliWiewed;
