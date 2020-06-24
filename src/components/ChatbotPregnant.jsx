import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0596de',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#0596de',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  botAvatar: 'https://image.freepik.com/vecteurs-libre/icone-medecin-avatar-blanc_136162-58.jpg',
};

class SimpleForm extends Component {
  simple(){
    console.log('click');
  }

  render() {
    return (
      <ThemeProvider theme={theme} >
      <ChatBot
      headerTitle="Doctobot"
        steps={[
          {
            function: this.simple(),
            id: '1',
            message: 'Bonjour Marie, Félicitations ! Dr Colas m\'informe que tu commences ton deuxième trimestre de grossesse, comment ça se passe ?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 'Très bien', label: 'Très bien', trigger: '4'},
              { value: 'Bien', label: 'Bien', trigger: '4' },
              { value: 'Moyen', label: 'Moyen', trigger: '3' },
              { value: 'Pas bien', label: 'Pas bien', trigger: '3' }
            ],
          },
          {
            id: '3',
            message: 'Qu\'est ce qui va mal?',
            trigger: '5',
          },
          {
            id: '4',
            message: 'Parfait ! As-tu pris ton rdv pour l\'échographie du 5ième mois?',
            trigger: '8',
          },
          {
            id: '5',
            options: [
              { value: 'Nausées', label: 'Nausées', trigger: '6' },
              { value: 'Angoisses', label: 'Angoisses', trigger: '6' },
              { value: 'Fatigue', label: 'Fatigue', trigger: '6' },
            ],
          },
          {
            id: '6',
            message: 'Appelle Dr Colas, ton médecin traitant ou envoies lui un mail : dr.colas@gmail.com. As-tu pris ton rdv pour l\'échographie du 5ième mois?',
            trigger: '8',
          },
          {
            id: '8',
            options: [
              { value: 'Oui', label: 'Oui', trigger: '9' },
              { value: 'Non', label: 'Non', trigger: '10' },
            ],
          },
          {
            id: '9',
            message: 'Super !',
            trigger: '11',
          },
          {
            id: '10',
            message: 'Penses à le faire ! Si tu souhaites connaitre le sexe de bébé, c\'est le moment !',
            trigger: '11',
          },
          {
            id: '11',
            message: 'Bonne journée :)',
            end: true,
          },
        ]}
      />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;