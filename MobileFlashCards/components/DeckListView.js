import React from 'react'
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'

import Icon from 'react-native-vector-icons/Ionicons'
import {styles} from '../styles'

class DeckListView extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title : 'Decks',
    headerStyle : {
      backgroundColor : '#a2f2d8'
    },
    headerRight : <TouchableHighlight onPress={()=>{
      navigation.navigate('AddDeckView');
    }}>
      <Icon name="ios-add-circle-outline" size={28} color='green' style={{
        paddingRight : 16
      }}/>
    </TouchableHighlight>
  })

  render() {
    const {decks} = this.props;
    return <View style={styles.container}>
      {Object.keys(decks).map( key => (
        <TouchableHighlight key={key} style={styles.itemContainer} onPress={()=>{
          this.deckSelected(decks[key]);
        }}>
          <View>
            <Text style={styles.h2}>{decks[key].title}</Text>
            <Text style={styles.h3}>{decks[key].questions.length} Questions</Text>
          </View>
        </TouchableHighlight>
      ) )}
    </View>
  }

  deckSelected = (deck)=> {
    this.props.navigation.navigate( 'DeckView', {deck:deck});
  }
}

function mapStateToProps(state) {

  return {
    decks : state
  }
}

export default connect(mapStateToProps)(DeckListView);
