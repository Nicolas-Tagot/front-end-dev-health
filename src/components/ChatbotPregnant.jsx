import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import axios from "axios";

// all available props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#0596de",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#0596de",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
  botAvatar:
    "https://image.flaticon.com/icons/png/512/122/122454.png",
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(value) {
    console.log(value);
    const url = 'http://localhost:8000/response/';
    axios
    .post(url, value)
    .then(res => res.data)
    .then(res => {
      console.log(res);
      //alert('I have got your answer!');
    })
    .catch(error => {
      console.log(error);
      //alert(' Error !');
    })
    return 4;
  }

  onSubmitPerso(value) {
    console.log(value);
    const url = 'http://localhost:8000/response/';
    axios
    .post(url, {response: value, perso: 1, id_patient: 1})
    .then(res => res.data)
    .then(res => {
      console.log(res);
      // alert('I have got your answer!');
    })
    .catch(error => {
      console.log(error);
      // alert(' Error ! ');
    })
    return 4;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Doctobot"
          steps={[
            {
              id: "1",
              message:
                "Bonjour Marie, Félicitations ! Dr Colas m'informe que tu es enceintes, je vais t'accompagner durant ta grossesse !",
              trigger: "2",
            },
            {
              id: "2",
              message: "Durant cette accompagnement, je vais te rappeler les moments où tu devras prendre rendez-vous avec des praticiens mais aussi te demander comme tu te sens :)",
              trigger: "3",
            },
            {
              id: "3",
              message: "Ca te va ?",
              trigger: "4",
            },
            {
              id: "4",
              options: [
                { value: "Oui", label: "Oui", trigger: () => {
                  this.onSubmit("Oui");
                  return '5'}
                 },
                { value: "Non", label: "Non", trigger: () => {
                  this.onSubmit("non");
                  return '6'}
                 },
              ],
            },
            {
              id: "5",
              message: "Parfait ! ",
              trigger: "7",
            },
            {
              id: "6",
              message: "Très bien, si tu désires de nouveau faire appel à moi hésites pas ! :)",
              trigger: "9",
            },
            {
              id: "7",
              message: "À quelle fréquence désires tu que je prenne des nouvelles de toi ?",
              trigger: "8",
            },
            {
              id: "8",
              options: [
                { value: "Journalier", label: "Journalier", trigger: () => {
                  this.onSubmitPerso("Désire être contacté tous les jours");
                  return '9'}
                 },
                { value: "Hebdomadaire", label: "Hebdomadaire", trigger: () => {
                  this.onSubmitPerso("Désire être contacté une fois par semaine");
                  return '9'}
                 },
              ],
            },
            {
              id: "9",
              message: "Très bien, on fait comme ça !",
              trigger: "10",
            },
            {
              id: "10",
              message: "Tu arrives bientôt à ta 8ème semaine de grossesse, penses à prendre rendez-vous pour ta première écographie.",
              trigger: "11",
            },
            {
              id: "11",
              message: "À bientôt :)",
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
