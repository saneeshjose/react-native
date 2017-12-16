import React from 'react'
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'

import {styles} from '../styles'

class DeckListView extends React.Component {

  render() {

    const {decks} = this.props;

    return <View style={styles.container}>
      {Object.keys(decks).map( key => (
        <TouchableHighlight key={key} style={styles.itemContainer} onPress={()=>{
          this.deckSelected(key);
        }}>
          <View>
            <Text style={styles.h2}>{decks[key].title}</Text>
            <Text style={styles.h3}>{decks[key].questions.length} Questions</Text>
          </View>
        </TouchableHighlight>
      ) )}
    </View>
  }

  deckSelected = (key)=> {
    this.props.navigation.navigate( 'DeckView', {deck:key});
  }
}

function mapStateToProps(state) {

  return {
    decks : state
  }
}

export default connect(mapStateToProps)(DeckListView);
