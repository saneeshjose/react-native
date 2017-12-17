import React from 'react'
import { View, Text, StatusBar, TouchableHighlight} from 'react-native'
import {StackNavigator} from 'react-navigation'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import AddQuestionView from './components/AddQuestionView'
import QuizView from './components/QuizView'
import ScoreView from './components/ScoreView'
import AddDeckView from './components/AddDeckView'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Constants} from 'expo'
import Icon from 'react-native-vector-icons/Ionicons'

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
    screen : DeckView,
    navigationOptions : {
      title : 'Deck',
      headerStyle : {
        backgroundColor : '#a2f2d8'
      }
    }
  },

  AddDeckView : {
    screen : AddDeckView,
    navigationOptions : {
      title : 'Add Deck',
      headerStyle : {
        backgroundColor : '#a2f2d8'
      }
    }
  },

  AddQuestionView : {
    screen : AddQuestionView,
    navigationOptions : {
      title : 'Add Question',
      headerStyle : {
        backgroundColor : '#a2f2d8'
      }
    }
  },
  QuizView : {
    screen : QuizView,
    navigationOptions : {
      title : 'Quiz',
      headerStyle : {
        backgroundColor : '#a2f2d8'
      }
    }
  },
  ScoreView : {
    screen : ScoreView,
    navigationOptions : {
      title : 'Score Card',
      headerStyle : {
        backgroundColor : '#a2f2d8'
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
