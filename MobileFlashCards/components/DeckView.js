import React from 'react'
import {connect} from 'react-redux'
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native'

import {styles} from '../styles'

class DeckView extends React.Component {

  render() {

    const {deck} = this.props;

    return <View style={styles.container}>
      <Text style={styles.h1}>{deck.title}</Text>
      <Text style={styles.h3}>{deck.questions.length} cards</Text>

      <TouchableHighlight style={[styles.touchableMedium,styles.touchableDefault]} onPress={()=>{
        this.props.navigation.navigate('QuizView', {
          deck : deck,
          showQuestion : 0,
          correct : 0,
          incorrect : 0
        })
      }}>
        <View>
          <Text style={styles.btnText}>Start a Quiz</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight style={[styles.touchableMedium]} onPress={()=>{
        this.props.navigation.navigate('AddQuestionView', {
          deck : deck
        })
      }}>
        <View>
          <Text style={styles.btnText}>Create New Question</Text>
        </View>
      </TouchableHighlight>

    </View>
  }
}

function mapStateToProps (state, ownProps) {

  console.log(ownProps.navigation);

  const deckKey = ownProps.navigation.state.params.deck;
  return {
    deck : state[Object.keys(state).find( key => key===deckKey )]
  }
}

export default connect(mapStateToProps)(DeckView)
