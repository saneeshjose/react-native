import {
  ADD_DECK,
  ADD_QUESTION
} from '../actions/types'

export default function decks(state = {}, action ) {

  switch ( action.type ) {
    case ADD_DECK :
        return {
          ...state,
          [action.deck.title]: action.deck
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
