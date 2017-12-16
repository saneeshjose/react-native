import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'

class AddQuestionView extends Component {

  render() {

    return <View style={styles.container}>
    <TextInput placeholder="Question here" style={styles.textInput}/>
    <TextInput placeholder="Answer here" style={styles.textInput}/>
    <TouchableHighlight style={styles.submitBtn} onPress={this.addQuestion}>
      <Text>Submit</Text>
    </TouchableHighlight>
    </View>
  }

  addQuestion = () => {
    
  }
}

const styles = StyleSheet.create( {
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'flex-start',
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
  text : {
    fontSize : 18
  }
});

export default AddQuestionView;
