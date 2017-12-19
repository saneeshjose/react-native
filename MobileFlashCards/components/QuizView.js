import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'

import {styles} from '../styles'

class QuizView extends Component {

  static navigationOptions = ({navigation}) => ({
    navigationOptions : {
      title : 'Quiz',
      headerStyle : {
        backgroundColor : '#a2f2d8'
      }
    }
  })

  state = {
    answerShown : false
  }

  render() {

    const {deck, showQuestion, correct, incorrect} = this.props.navigation.state.params;

    { if ( deck.questions.length === 0) return <Text style={styles.h3}>No cards</Text> }

    return <View style={styles.container}>
    <Text>{correct+incorrect+1} / {deck.questions.length}</Text>

    {this.state.answerShown? (
      <View>
        <Text style={styles.h2}>{deck.questions[showQuestion].answer}</Text>
        <TouchableHighlight onPress={()=>this.setState({answerShown:false})}>
          <Text style={styles.h3}>Show Question</Text>
        </TouchableHighlight>
      </View>
    )  : (
      <View>
        <Text style={styles.h2}>{deck.questions[showQuestion].question}</Text>
        <TouchableHighlight onPress={()=>this.setState({answerShown:true})}>
          <Text style={styles.h3}>Show Answer</Text>
        </TouchableHighlight>
      </View>
    )}

    <TouchableHighlight style={[styles.touchableMedium,styles.touchableSuccess]} onPress={()=>{this.nextQuestion(true)}}>
      <Text>Correct</Text>
    </TouchableHighlight>

    <TouchableHighlight style={[styles.touchableMedium,styles.touchableDanger]} onPress={()=>{this.nextQuestion(false)}}>
      <Text>Incorrect</Text>
    </TouchableHighlight>
    </View>

  }

  nextQuestion = (result) => {

    const {deck, showQuestion, correct, incorrect} = this.props.navigation.state.params;
    let nextIndex = showQuestion + 1;
    let c=correct,i=incorrect;

    result?++c:++i;

    if ( deck.questions.length === nextIndex ) {
      this.props.navigation.navigate('ScoreView', {
        deck : deck,
        correct : c,
        incorrect : i
      })
    }
    else {
      this.props.navigation.navigate('QuizView', {
        deck : deck,
        showQuestion : nextIndex,
        correct : c,
        incorrect : i
      })
    }
  }
}
export default QuizView;
