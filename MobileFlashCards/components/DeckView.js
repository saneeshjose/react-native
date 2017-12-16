import React from 'react'
import {connect} from 'react-redux'
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native'

class DeckView extends React.Component {

  render() {

    const {deck} = this.props;

    return <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.size}>{deck.questions.length} cards</Text>

      <TouchableHighlight style={styles.addBtn} onPress={()=>{
        this.props.navigation.navigate('AddQuestionView', {
          deckKey : deck.title
        })
      }}>
        <View>
          <Text style={styles.btnText}>Add Card</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight style={styles.startBtn} onPress={()=>{
        this.props.navigation.navigate('QuizView', {
          deck : deck,
          showQuestion : 0,
          correct : 0,
          incorrect : 0
        })
      }}>
        <View>
          <Text style={styles.btnText}>Start Quiz</Text>
        </View>
      </TouchableHighlight>
    </View>
  }
}

const styles = StyleSheet.create({

  container : {
    flex : 1,
    flexDirection: 'column',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#7ae2c3'
  },
  title : {
    fontSize : 64,
    padding : 8
  },
  size : {
    fontSize : 16,
    marginBottom : 64
  },
  addBtn : {
    borderStyle : 'solid',
    borderWidth : 2,
    borderRadius : 12,
    padding : 12,
    marginBottom :12,
    backgroundColor : 'grey'
  },
  startBtn : {
    borderStyle : 'solid',
    borderWidth : 2,
    borderRadius : 12,
    padding : 12,
    marginBottom :12,
    backgroundColor : 'white'
  },
  btnText : {
    fontSize : 32
  }

})

function mapStateToProps (state, ownProps) {

  const deckKey = ownProps.navigation.state.params.deck;
  return {
    deck : state[Object.keys(state).find( key => key===deckKey )]
  }
}

export default connect(mapStateToProps)(DeckView)
