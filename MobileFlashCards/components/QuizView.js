import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'

class QuizView extends Component {

  state = {
    answerShown : false
  }

  render() {

    const {deck, showQuestion} = this.props.navigation.state.params;

    console.log(this.props.navigation.state.params);

    return <View style={styles.container}>


    {this.state.answerShown? (
      <View>
        <Text style={styles.question}>{deck.questions[showQuestion].answer}</Text>
        <TouchableHighlight style={styles.answerBtn} onPress={()=>this.setState({answerShown:false})}>
          <Text>Question</Text>
        </TouchableHighlight>
      </View>
    )  : (
      <View>
        <Text style={styles.question}>{deck.questions[showQuestion].question}</Text>
        <TouchableHighlight style={styles.answerBtn} onPress={()=>this.setState({answerShown:true})}>
          <Text>Answer</Text>
        </TouchableHighlight>
      </View>
    )}

    <TouchableHighlight style={styles.submitBtn} onPress={()=>{this.nextQuestion(true)}}>
      <Text>Correct</Text>
    </TouchableHighlight>

    <TouchableHighlight style={styles.submitBtn} onPress={()=>{this.nextQuestion(false)}}>
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
      console.log("No more questions. Show the score");
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

const styles = StyleSheet.create( {
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    paddingTop : 32,
    paddingRight : 32,
    paddingLeft : 32,
    backgroundColor : '#7ae2c3'
  },
  textInput : {
    padding : 16,
    backgroundColor : '#eeeeee',
    width : 300,
    borderRadius : 6,
    marginBottom : 10
  },
  submitBtn : {
    padding : 16,
    borderRadius : 6,
    backgroundColor : '#cccccc'
  },
  answerBtn : {
    padding : 16
  },
  text : {
    fontSize : 18
  }
});

export default QuizView;
