import React from 'react'
import {View,Text, TextInput, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {addDeck} from '../actions/decks'

import {styles} from '../styles'

class AddDeckView extends React.Component {

  state = {
    title : ''
  }

  render() {

    return <View style={styles.container}>
      <TextInput placeholder='Deck title here' style={styles.textInput} value={this.state.title} onChangeText={(text)=>this.setState({title:text})}/>
      <TouchableHighlight style={[styles.touchableSmall,styles.touchableDefault]} onPress={()=>{
        this.props.dispatch(addDeck(this.state.title))
        this.props.navigation.goBack();
      }}>
        <Text>Submit</Text>
      </TouchableHighlight>
    </View>
  }
}

export default connect()(AddDeckView);
