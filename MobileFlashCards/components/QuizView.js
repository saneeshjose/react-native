import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native'

import {styles} from '../styles'

class QuizView extends Component {

  static navigationOptions = ({navigation}) => ({
    title : 'Quiz',
    headerStyle : {
      backgroundColor : '#a2f2d8'
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
      <View style={{
        alignItems : 'center'
      }}>
        <Text style={[styles.h3]}>{deck.questions[showQuestion].answer}</Text>
        <TouchableHighlight style={styles.touchableMedium} onPress={()=>this.setState({answerShown:false})}>
          <Text style={styles.showQuestionText}>Show Question</Text>
        </TouchableHighlight>
      </View>
    )  : (
      <View style={{
        alignItems : 'center'
      }}>
        <Text style={[styles.h2]}>{deck.questions[showQuestion].question}</Text>
        <TouchableHighlight style={styles.touchableMedium} onPress={()=>this.setState({answerShown:true})}>
          <Text style={styles.showAnswerText}>Show Answer</Text>
        </TouchableHighlight>
      </View>
    )}

    <TouchableOpacity style={[styles.touchableMedium,styles.touchableSuccess]} onPress={()=>{this.nextQuestion(true)}}>
      <Text style={styles.textMedium}> Correct </Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.touchableMedium,styles.touchableDanger]} onPress={()=>{this.nextQuestion(false)}}>
      <Text style={styles.textMedium}>Incorrect</Text>
    </TouchableOpacity>
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
