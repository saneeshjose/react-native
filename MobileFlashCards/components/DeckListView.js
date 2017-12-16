import React from 'react'
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'

class DeckListView extends React.Component {

  render() {

    const {decks} = this.props;

    console.log();

    return <View style={styles.container}>
      {Object.keys(decks).map( key => (
        <TouchableHighlight key={key} style={styles.itemContainer} onPress={()=>{
          this.deckSelected(key);
        }}>
          <View>
            <Text style={styles.title}>{decks[key].title}</Text>
            <Text style={styles.size}>{decks[key].questions.length} Questions</Text>
          </View>
        </TouchableHighlight>
      ) )}
    </View>
  }

  deckSelected = (key)=> {
    console.log('Deck selected ' + key)
    this.props.navigation.navigate( 'DeckView', {deck:key});
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'white',
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    backgroundColor : '#7ae2c3'
  },

  itemContainer : {
    borderStyle : 'solid',
    borderColor : 'grey',
    backgroundColor : '#eeeeee',
    borderWidth : 2,
    borderRadius : 12,
    marginBottom : 12,
    margin : 5,
    padding : 12
  },

  title : {
    textAlign : 'center',
    fontSize : 32
  },

  size : {
    textAlign : 'center',
    fontSize : 16
  }
})

function mapStateToProps(state) {

  return {
    decks : state
  }
}

export default connect(mapStateToProps)(DeckListView);
