import React from 'react'
import { View, Text, StatusBar, TouchableHighlight} from 'react-native'
import {StackNavigator} from 'react-navigation'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Constants} from 'expo'
import Icon from 'react-native-vector-icons/Ionicons'

import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import AddQuestionView from './components/AddQuestionView'
import QuizView from './components/QuizView'
import ScoreView from './components/ScoreView'
import AddDeckView from './components/AddDeckView'

import decks from './reducers/decks'

import {setReminder} from './helpers'

const Stack = StackNavigator({
  DeckListView : {
    screen : DeckListView
  },
  DeckView : {
    screen : DeckView
  },
  AddDeckView : {
    screen : AddDeckView
  },
  AddQuestionView : {
    screen : AddQuestionView
  },
  QuizView : {
    screen : QuizView,
  },
  ScoreView : {
    screen : ScoreView,
  }
})

const configureStore = ()=> {

   let store = createStore(decks, {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  } );

  return store;
}

export default class App extends React.Component {

  componentDidMount = ()=> {
    //Set local notification to complete a FlashCard before 5pm, starting today
    let d = new Date();
    d.setHours(17);
    d.setMinutes(0);
    setReminder(d, 'day');
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{
          flex:1
        }}>
          <View style={{
            backgroundColor : '#32bc91',
            height : Constants.statusBarHeight
          }}>
            <StatusBar backgroundColor="#32bc91" barStyle="light-content" />
          </View>
          <Stack/>
        </View>

      </Provider>
    )
  }
}
