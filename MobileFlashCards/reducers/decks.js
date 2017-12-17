import {
  ADD_DECK,
  ADD_QUESTION
} from '../actions/types'

export default function decks(state = {}, action ) {

  console.log( action );
  switch ( action.type ) {
    case ADD_DECK :
        return {
          ...state,
          [action.title]: {
            title : action.title,
            questions : []
          }
        }

    case ADD_QUESTION :

      const {title} = action.deck;
      let s = {
        ...state,
        [title] : {
          "title" : title,
          "questions" : [
            ...state[title]["questions"],
            action.question
          ]
        }
      }

      return s;

    default:
      return state;
  }
}
