import React from 'react';
import "./css.css";
import AppliWiewed from "./AppliWiewed";
import Add from "./add";
import Suivis from "./suivis";
import Medics from "./medicament"
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value :'',
      id: '',
      name: ''
    };
   this.handleChange = this.handleChange.bind(this);
   this.validator = this.validator.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  validator(event) {
    const num = this.state.value
    const set = this
      axios.get(`http://localhost:3004/patient/${num}`)
      .then(function (response) {
        const nom = response.data.name;
        set.setState({ name : nom })
        console.log(nom);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});

  }

render(){

const { name } = this.state

  return (

    <div>
    <Router>
      <div className="top">
        <div className="login"></div>
          <input className="champ" value={this.state.value} onChange={this.handleChange} />
          <input type="button" className="valid" value="valider" onClick={this.validator} />
        </div>
      <div className="centre">
        <div className="navigation">

          <Link to="/suivis"><input type="button" className="btnNav" value="Suivis"/></Link>
          <Link to="/medics"><input type="button" className="btnNav" value="Médicaments"/></Link>
          <Link to="/commentaires"><input type="button" className="btnNav" value="Commentaires"/></Link>
          <Link to="/add"><input type="button" className="btnNav" value="Modifier l'assistant"/></Link>
      </div>
      <div className="visual">

          <Switch>
          <Route path="/medics">
            <Medics id={name} />
        </Route>
            <Route path="/suivis">
              <Suivis id={name}/>
          </Route>
          <Route path="/commentaires">
            <AppliWiewed id={name}/>
        </Route>
        <Route path="/add">
          <Add id={name}/>
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
