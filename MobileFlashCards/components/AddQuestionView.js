import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'

import {styles} from '../styles'

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
}

export default AddQuestionView;
