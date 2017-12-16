import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {addQuestion} from '../actions/decks'
import {styles} from '../styles'

class AddQuestionView extends Component {

  render() {

    return <View style={styles.container}>
    <TextInput placeholder="Question here" style={styles.textInput}/>
    <TextInput placeholder="Answer here" style={styles.textInput}/>
    <TouchableHighlight style={[styles.touchableSmall,styles.touchableDefault]} onPress={this.addQuestion}>
      <Text>Submit</Text>
    </TouchableHighlight>
    </View>
  }

  addQuestion = ()=>{
    this.props.dispatch(addQuestion(this.props.deck,{
      question : 'Who am I?',
      answer : 'Bruce Lee'
    }));
    this.props.navigation.navigate('DeckView', {deck:this.props.deck.title});
  }
}

const mapStateToProps = (state,ownProps)=> {
  return {
    deck : ownProps.navigation.state.params.deck
  }
}

export default connect(mapStateToProps)(AddQuestionView);
