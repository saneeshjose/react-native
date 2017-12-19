import React from 'react'
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {setReminder} from '../helpers'

import {styles} from '../styles'

class ScoreView extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title : 'Score Card',
    headerStyle : {
      backgroundColor : '#a2f2d8'
    }
  })

  componentDidMount = () => {

    //FlashCard has been completed. Reset reminder to start from tomorrow
    let d = new Date();
    d.setDate(d.getDate()+1);
    d.setHours(17);
    d.setMinutes(0);

    setReminder(d, 'day');
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

  backToQuiz = (deck) => {

    this.props.navigation.dispatch(NavigationActions.reset({
      index : 2,
      actions : [
        NavigationActions.navigate({
          routeName:'DeckListView'
        }),
        NavigationActions.navigate({
          routeName:'DeckView',
          params : {deck:deck}
        }),
        NavigationActions.navigate({
          routeName:'QuizView',
          params : {
            deck : deck,
            showQuestion : 0,
            correct : 0,
            incorrect : 0
          }
        }),
      ]
    }));
  }

  render() {

    const {correct, incorrect,deck} = this.props.navigation.state.params;

    return <View style={styles.container}>
      <Text style={styles.scoreText}> Your Score : {correct}/{correct+incorrect} </Text>

      <TouchableHighlight style={[styles.touchableMedium, styles.touchableDefault]} onPress={()=>{
        this.backToDeck(deck);
      }}>
        <Text>Back to Deck</Text>
      </TouchableHighlight>

      <TouchableHighlight style={[styles.touchableMedium, styles.touchableDefault]} onPress={()=>{
        this.backToQuiz(deck);
      }}>
        <Text>Restart Quiz</Text>
      </TouchableHighlight>
    </View>
  }
}

export default ScoreView;
