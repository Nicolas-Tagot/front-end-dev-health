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
    "https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg",
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  // onSubmit(value) {
  //   const url = 'http://localhost:8000/response/';
  //   axios
  //   .post(url, value)
  //   .then(res => res.data)
  //   .then(res => {
  //     console.log(res);
  //     alert('I have got your answer!');
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     alert(' Error ! ');
  //   })
  //   return 4;
  // }

  render() {
    // const getResponse = this.onSubmit();
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Doctobot"
          steps={[
            {
              id: "1",
              message:
                "Bonjour Marie, Félicitations ! Dr Colas m'informe que tu commences ton deuxième trimestre de grossesse, comment ça se passe ?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
              validator: (value) => {
                if (
                  value === "Très bien" ||
                  value === "Bien" ||
                  value === "Moyen" ||
                  value === "Pas bien"
                ) {
                  return true;
                } else {
                  return "Je ne comprend pas ta réponse";
                }
              },
            },
            {
              id: "3",
              message: "Parfait !",
              trigger: "6",
            },
            {
              id: "6",
              message: " As-tu pris ton rdv pour l'échographie du 5ième mois?",
              trigger: "7",
            },
            {
              id: "7",
              options: [
                { value: "Oui", label: "Oui", trigger: "11" },
                { value: "Non", label: "Non", trigger: "11" },
              ],
            },
            // {
            //   id: '6',
            //   message: 'Q\'est-ce qui ne va pas ?',
            //   trigger: '11',
            // },
            // {
            //   id: '5',
            //   options: [
            //     { value: 'Nausées', label: 'Nausées', trigger: '6' },
            //     { value: 'Angoisses', label: 'Angoisses', trigger: '6' },
            //     { value: 'Fatigue', label: 'Fatigue', trigger: '6' },
            //   ],
            // },
            // {
            //   id: '6',
            //   message: 'Appelle Dr Colas, ton médecin traitant ou envoies lui un mail : dr.colas@gmail.com. As-tu pris ton rdv pour l\'échographie du 5ième mois?',
            //   trigger: '8',
            // },
            // {
            //   id: '8',
            //   options: [
            //     { value: 'Oui', label: 'Oui', trigger: '9' },
            //     { value: 'Non', label: 'Non', trigger: '10' },
            //   ],
            // },
            // {
            //   id: '9',
            //   message: 'Super !',
            //   trigger: '11',
            // },
            // {
            //   id: '10',
            //   message: 'Penses à le faire ! Si tu souhaites connaitre le sexe de bébé, c\'est le moment !',
            //   trigger: '11',
            // },
            {
              id: "11",
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
