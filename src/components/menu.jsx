import React from "react";
import "./css.css";
import AppliWiewed from "./AppliWiewed";
import Add from "./add";
import Suivis from "./suivis";
import Medics from "./medicament";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      id: "0",
      name: "",
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.validator = this.validator.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  validator(event) {
    const num = this.state.value;
    const set = this;
    axios
      .get(`http://localhost:8000/patient/${num}`)
      .then(function(response) {
        const nom = response.data.name;
        set.setState({ name: nom });
        console.log(nom);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });

    axios
      .get(`http://localhost:8000/response/${num}`)
      .then(function(response) {
        const datas = response.data;
        set.setState({ data: datas });
        console.log(datas);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    const { name, data } = this.state;

    return (
      <div>
        <Router>
          <div className="top">
            <div className="login"></div>
            <img src="public/pics/avatar_doc.png" alt="doc log" />
            <input
              className="champ"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="button"
              className="valid"
              value="OK"
              onClick={this.validator}
            />
          </div>
          <div className="centre">
            <div className="navigation">
              <Link to="/doc/suivis">
                <input type="button" className="btnNav" value="Suivi Médical" />
              </Link>
              <Link to="/doc/medics">
                <input type="button" className="btnNav" value="Suivi de traitements" />
              </Link>
              <Link to="/doc/commentaires">
                <input type="button" className="btnNav" value="Moral du patient" />
              </Link>
              <Link to="/doc/add">
                <input
                  type="button"
                  className="btnNav"
                  value="Paramétrer Doctobot"
                />
              </Link>
            </div>
            <div className="visual">
              <Switch>
                <Route path="/doc/medics">
                  <Medics id={name} historique={data} />
                </Route>
                <Route path="/doc/suivis">
                  <Suivis id={name} historique={data} />
                </Route>
                <Route path="/doc/commentaires">
                  <AppliWiewed id={name} historique={data} />
                </Route>
                <Route path="/doc/add">
                  <Add id={name} historique={data} />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Menu;
