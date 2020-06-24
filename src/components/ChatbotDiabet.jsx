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
};

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <ChatBot
      headerTitle="Doctobot"
        steps={[
          {
            id: '1',
            message: 'Bonjour Marie, comment vas-tu aujourd’hui ?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 'Très bien', label: 'Très bien', trigger: '4' },
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
            id: '5',
            options: [
              { value: 'Perso', label: 'Perso', trigger: '6' },
              { value: 'Santé', label: 'Santé', trigger: '7' },
              { value: 'Travail', label: 'Travail', trigger: '6' },
            ],
          },
          {
            id: '6',
            message: 'Je suis Doctobot, ton assistant médical et je suis pas encore compétent sur ces sujets là, excuse moi :( As-tu pris ton comprimé ce matin ?',
            trigger: '8',
          },
          {
            id: '7',
            message: 'Appelle Dr Colas, ton médecin traitant ou envoies lui un mail : dr.colas@gmail.com. As-tu pris ton comprimé ce matin ?',
            trigger: '8',
          },
          {
            id: '4',
            message: 'Super ! Quand le moral est bon, c’est le principal.  As-tu pris ton comprimé ce matin ?',
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
            message: 'Bien joué ! Continues comme ça :) Mon conseil du jour : faire 30 minutes d’activité sportive te permet de baisser ton taux de sucre dans le sang.',
            trigger: '11',
          },
          {
            id: '10',
            message: 'Je t\'enverrai une notification en fin de journée',
            trigger: '11',
          },
          {
            id: '11',
            message : 'As tu vérifié ton taux de glycémie ?',
            trigger: '12',
          },
          {
            id: '12',
            options: [
              { value: 'Oui', label: 'Oui', trigger: '13' },
              { value: 'Non', label: 'Non', trigger: '14' },
            ],
          },
          {
            id: '13',
            message: 'Bravo !',
            trigger: '15',
          },
          {
            id: '14',
            message: 'Penses bien à le faire car la régularité est importante pour vivre avec ton diabète de type 2.',
            trigger: '15',
          },
          {
            id: '15',
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