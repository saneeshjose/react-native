import React from 'react'
import { View, Text } from 'react-native'
import {StackNavigator} from 'react-navigation'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import AddQuestionView from './components/AddQuestionView'
import QuizView from './components/QuizView'
import ScoreView from './components/ScoreView'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import decks from './reducers/decks.js'

const store = createStore(decks, {
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

const Stack = StackNavigator({
  DeckListView : {
    screen : DeckListView
  },
  DeckView : {
    screen : DeckView
  },
  AddQuestionView : {
    screen : AddQuestionView
  },
  QuizView : {
    screen : QuizView
  },
  ScoreView : {
    screen : ScoreView
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}><Stack/></Provider>
    )
  }
}
