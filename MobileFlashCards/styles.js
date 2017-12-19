import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center',
    //backgroundColor : '#7ae2c3',
    backgroundColor : '#d6fff2'
  },

  itemContainer : {
    borderStyle : 'solid',
    borderColor : '#efefef',
    backgroundColor : '#ffffff',
    borderWidth : 1,
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
    borderWidth : 1,
    borderRadius : 12,
    padding : 12,
    marginBottom :12,
    borderColor : '#bafce7'
  },
  touchableSmall : {
    padding : 16,
    borderRadius : 6,
    backgroundColor : '#cccccc'
  },

  touchableDefault : {
    backgroundColor : '#32bc91',
    borderColor : '#bafce7'
  },
  touchableSuccess : {
    backgroundColor : 'green'
  },
  touchableDanger : {
    backgroundColor : 'red'
  },

  textInput : {
    padding : 16,
    backgroundColor : '#ffffff',
    width : 300,
    borderRadius : 6,
    marginBottom : 10
  },

  textAreaInput : {
    padding : 16,
    backgroundColor : '#ffffff',
    width : 300,
    height : 140,
    borderRadius : 6,
    marginBottom : 10
  },

  textLarge : {
    fontSize : 32
  },
  textMedium : {
    fontSize : 18
  },

  textDefault : {
    color : 'green'
  },
  textWarning : {
    color : 'orange'
  },
  textDanger : {
    color : 'red'
  },

  showQuestionText : {
    fontSize : 14,
    color : 'red'
  },

  showAnswerText : {
    fontSize : 14,
    color : 'green'
  },

  scoreText : {
    textAlign : 'center',
    fontSize : 32,
    padding : 8,
    color : '#1b9b66',
    fontWeight : 'bold',
    marginBottom : 24
  }

})
