import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

  container : {
    backgroundColor : 'white',
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center',
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
    padding : 12,
    width : 350
  },

  h1 : {
    textAlign : 'center',
    fontSize : 64,
    padding : 16
  },

  h2 : {
    textAlign : 'center',
    fontSize : 32,
    padding : 8
  },

  h3 : {
    textAlign : 'center',
    fontSize : 16,
    padding : 8
  },

  touchableMedium : {
    borderWidth : 2,
    borderRadius : 12,
    padding : 12,
    marginBottom :12
  },
  touchableSmall : {
    padding : 16,
    borderRadius : 6,
    backgroundColor : '#cccccc'
  },

  touchableDefault : {
    backgroundColor : 'grey'
  },
  touchableSuccess : {
    backgroundColor : 'green'
  },
  touchableDanger : {
    backgroundColor : 'red'
  },

  textInput : {
    padding : 16,
    backgroundColor : '#eeeeee',
    width : 300,
    borderRadius : 6,
    marginBottom : 10
  },

  textLarge : {
    fontSize : 32
  },
  textMedium : {
    fontSize : 18
  }
})
