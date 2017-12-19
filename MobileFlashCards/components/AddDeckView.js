import React from 'react'
import {View,Text, TextInput, TouchableHighlight} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {addDeck} from '../actions/decks'

import {styles} from '../styles'

class AddDeckView extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title : 'Add Deck',
    headerStyle : {
      backgroundColor : '#a2f2d8'
    }
  })

  state = {
    title : ''
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
      <TextInput placeholder='Deck title here' style={styles.textInput} value={this.state.title} onChangeText={(text)=>this.setState({title:text})}/>
      <TouchableHighlight style={[styles.touchableSmall,styles.touchableDefault]} onPress={()=>{
        let deck = {
          title : this.state.title,
          questions : []
        }
        this.props.dispatch(addDeck(deck));
        this.backToDeck(deck);
      }}>
        <Text>Create Deck</Text>
      </TouchableHighlight>
    </View>
  }
}

export default connect()(AddDeckView);
