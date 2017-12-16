import React from 'react'
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'

import {styles} from '../styles'

class ScoreView extends React.Component {

  render() {

    const {correct, incorrect,deck} = this.props.navigation.state.params;

    console.log('Rendering ScoreView');

    return <View style={styles.container}>
      <Text>Correct : {correct} </Text>
      <Text>Incorrect : {incorrect} </Text>

      <TouchableHighlight style={styles.btn} onPress={()=>{
        this.props.navigation.navigate( 'DeckView', {deck:deck.title});
      }}>
        <Text>Back to Deck</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.btn} onPress={()=>{
        this.props.navigation.navigate('QuizView', {
          deck : deck,
          showQuestion : 0,
          correct : 0,
          incorrect : 0
        })
      }}>
        <Text>Restart Quiz</Text>
      </TouchableHighlight>
    </View>
  }
}

export default ScoreView;
