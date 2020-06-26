import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import axios from "axios";

// all available props
const theme = {
  background: "#e6e8e8",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#26ab91",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#0596de",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
    };
  }

  onSubmitPerso(value) {
    console.log(value);
    const url = 'http://localhost:8000/response/';
    axios
    .post(url, {response: value, perso: 1, id_patient: 0})
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

  onSubmitMedic(value) {
    console.log(value);
    const url = 'http://localhost:8000/response/';
    axios
    .post(url, {response: value, medic: 1, id_patient: 0})
    .then(res => res.data)
    .then(res => {
      console.log(res);
      //alert('I have got your answer!');
    })
    .catch(error => {
      console.log(error);
      //alert(' Error ! ');
    })
    return 4;
  }

  onSubmitSante(value) {
    console.log(value);
    const url = 'http://localhost:8000/response/';
    axios
    .post(url, {response: value, sante: 1, id_patient: 0})
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
              message: "Bonjour, comment vas-tu aujourd’hui ?",
              trigger: "2",
            },
            {
              id: "2",
              options: [
                {
                  value: "Très bien",
                  label: "Très bien",
                  trigger: () => {
                    this.onSubmitPerso("Moral : très bien");
                    return "4";
                  },
                },
                {
                  value: "Bien",
                  label: "Bien",
                  trigger: () => {
                    this.onSubmitPerso("Moral : Bien");
                    return "4";
                  },
                },
                {
                  value: "Moyen",
                  label: "Moyen",
                  trigger: () => {
                    this.onSubmitPerso("Moral : Moyen");
                    return "3";
                  },
                },
                {
                  value: "Pas bien",
                  label: "Pas bien",
                  trigger: () => {
                    this.onSubmitPerso("Moral : Pas bien");
                    return "3";
                  },
                },
              ],
            },
            {
              id: "3",
              message: "Qu'est ce qui va mal?",
              trigger: "5",
            },
            {
              id: "5",
              options: [
                { value: "Perso", label: "Perso", trigger: "6" },
                {
                  value: "Santé",
                  label: "Santé",
                  trigger: '7'
                },
                { value: "Travail", label: "Travail", trigger: "6" },
              ],
            },
            {
              id: "6",
              message:
                "Je suis Doctobot, ton assistant médical et je suis pas encore compétent sur ces sujets là, excuse moi :( As-tu pris ton comprimé ce matin ?",
              trigger: "8",
            },
            {
              id: "7",
              message:
                "Appelle Dr Colas, ton médecin traitant ou envoies lui un mail : dr.colas@gmail.com. As-tu pris ton comprimé ce matin ?",
              trigger: "8",
            },
            {
              id: "4",
              message:
                "Super ! Quand le moral est bon, c’est le principal. As-tu pris ton comprimé ce matin ?",
              trigger: "8",
            },
            {
              id: "8",
              options: [
                {
                  value: "Oui",
                  label: "Oui",
                  trigger: () => {
                    this.onSubmitMedic("A bien pris son comprimé");
                    return "9";
                  },
                },
                {
                  value: "Non",
                  label: "Non",
                  trigger: () => {
                    this.onSubmitMedic("N'a pas pris son comprimé");
                    return "10";
                  },
                },
              ],
            },
            {
              id: "9",
              message:
                "Bien joué ! Continues comme ça :) Mon conseil du jour : faire 30 minutes d’activité sportive te permet de baisser ton taux de sucre dans le sang.",
              trigger: "11",
            },
            {
              id: "10",
              message:
                "Je t'enverrai une notification un peu plus tard pour te le rappeler ;)",
              trigger: "11",
            },
            {
              id: "11",
              message: "As tu vérifié ton taux de glycémie ?",
              trigger: "12",
            },
            {
              id: "12",
              options: [
                {
                  value: "Oui",
                  label: "Oui",
                  trigger: () => {
                    this.onSubmitSante("A bien vérifié son taux de glycémie");
                    return "13";
                  },
                },
                {
                  value: "Non",
                  label: "Non",
                  trigger: () => {
                    this.onSubmitSante("N'a pas vérifié son taux de glycémie");
                    return "14";
                  },
                },
              ],
            },
            {
              id: "13",
              message: "Bravo ! Merci de me le donner :",
              trigger: "15",
            },
            {
              id: "14",
              message:
                "Penses bien à le faire car la régularité est importante pour vivre avec ton diabète de type 2.",
              trigger: "19",
            },
            {
              id: "15",
              options: [
                {
                  value: "Faible < 0,45g/l",
                  label: "Faible < 0,45g/l",
                  trigger: () => {
                    this.onSubmitSante("Taux de glycémie faible < 0,45g/l");
                    return "16";
                  },
                },
                {
                  value: "Normal > 0,45g/l et < 1,26g/l",
                  label: "Normal > 0,45g/l et < 1,26g/l",
                  trigger: () => {
                    this.onSubmitSante("Taux de glycémie normal > 0,45g/l et < 1,26g/l");
                    return "17";
                  },
                },
                {
                  value: "Élevé > à 1,26g/l",
                  label: "Élevé > à 1,26g/l",
                  trigger: () => {
                    this.onSubmitSante("Taux de glycémie élevé > à 1,26g/l");
                    return "18";
                  },
                },
              ],
            },
            {
              id: "16",
              message:
                "Attention ton taux de glycémie est trop bas.",
              trigger: "19",
            },
            {
              id: "17",
              message:
                "C'est parfait !",
              trigger: "19",
            },
            {
              id: "18",
              message:
                "Attention ton taux de glycémie est trop élevé.",
              trigger: "19",
            },
            {
              id: "19",
              message: "Bonne journée :)",
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
