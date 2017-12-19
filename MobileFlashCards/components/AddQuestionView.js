import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'

import {addQuestion} from '../actions/decks'
import {styles} from '../styles'

class AddQuestionView extends Component {

  static navigationOptions = ({navigation}) => ({
    title : 'Add Question',
    headerStyle : {
      backgroundColor : '#a2f2d8'
    }
  })

  state = {
    question : '',
    answer : ''
  }

  backToDeck = (deck) => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index : 1,
      actions : [
        NavigationActions.navigate({
          routeName:'DeckListView'
        }),
        NavigationActions.navigate({
          routeName:'DeckView',
          params : {deck}
        }),
      ]
    }));
  }

  render() {

    return <View style={styles.container}>
      <TextInput placeholder="Question here" style={styles.textInput} value={this.state.question} onChangeText={(text)=>this.setState({
        question : text
      })}/>
      <TextInput placeholder="Answer here" style={styles.textAreaInput} value={this.state.answer} onChangeText={(text)=>this.setState({
        answer : text
      })} multiline={true} numberOfLines={4}/>
      <TouchableHighlight style={[styles.touchableSmall,styles.touchableDefault]} onPress={this.addQuestion}>
        <Text>Submit</Text>
      </TouchableHighlight>
    </View>
  }

  addQuestion = ()=>{
    this.props.dispatch(addQuestion(this.props.deck,{
      question : this.state.question,
      answer : this.state.answer
    }));

    this.backToDeck(this.props.deck);
  }
}

const mapStateToProps = (state,ownProps)=> {
  return {
    deck : ownProps.navigation.state.params.deck
  }
}

export default connect(mapStateToProps)(AddQuestionView);
