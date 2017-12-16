import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'

import {styles} from '../styles'

class QuizView extends Component {

  state = {
    answerShown : false
  }

  render() {

    const {deck, showQuestion} = this.props.navigation.state.params;

    return <View style={styles.container}>
    {this.state.answerShown? (
      <View>
        <Text style={styles.h2}>{deck.questions[showQuestion].answer}</Text>
        <TouchableHighlight onPress={()=>this.setState({answerShown:false})}>
          <Text style={styles.h3}>Question</Text>
        </TouchableHighlight>
      </View>
    )  : (
      <View>
        <Text style={styles.h2}>{deck.questions[showQuestion].question}</Text>
        <TouchableHighlight onPress={()=>this.setState({answerShown:true})}>
          <Text style={styles.h3}>Answer</Text>
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
