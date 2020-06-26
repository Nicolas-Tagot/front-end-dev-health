import React from 'react';
import axios from 'axios';
import "./css.css";
import {
  BrowserRouter as
  Link
} from "react-router-dom";

const selectOne = ["jour","semaine", "mois"];
const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const typerdv = ['Durée du traitement', 'prise de rdv','prise de sang'];
const selection = ['aucun',"grossesse","diabete de type 2","rythme cardiaque"]

class Add extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tableau : [1],
      selectionTemp : [],
    };
  }
componentDidMount(){
    const set = this
      axios.get("http://localhost:8000/templates")
      .then(function (response) {

  const data = response.data;
  set.setState({ selectionTemp : data })
  console.log(data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
  }

  ajouter(){
    const newtableau = this.state.tableau
    newtableau.push(this.state.tableau.length + 1)
    this.setState({ tableau : newtableau })
    console.log(this.state.tableau)
  }


  render(){
  return (
    <div className="add_menu">
      <div className="patientNameAdd">
          Patient : {this.props.id}
          </div>
    <h3>Type de traitement et durée : </h3>
    {this.state.tableau.map( (type) => { return (
      <div className="flex">
      <select className='etatG'>
      {typerdv.map((n) => <option>{n}</option> )}
      </select>
      <select className='etatG'>
      {number.map((num) => <option>{num}</option> )}
      </select>
      <select className='etatG'>
        {selectOne.map( (item) => <option>{item}</option> )}
      </select>

      </div>
    )} )}
    <input type="button" className="valid" id="validtreatment" onClick={() => this.ajouter()} value="Ajouter" />
    <h3>Choisir un questionnaire type :
    </h3>
    <select className='etatG'>{this.state.selectionTemp.map( (type) => <option>{type.name}</option> )}</select>

  <Link to="/suivis"><input type='button' className="valid" id="validfollowup" value="Valider" /> </Link>

    </div>
  );
}
}

export default Add;
