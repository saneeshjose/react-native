import {
  ADD_DECK,
  ADD_QUESTION
} from './types'

export const addQuestion = (deck, question)=>({
  type : ADD_QUESTION,
  deck,
  question
})

export const addDeck = (deck)=>({
  type : ADD_DECK,
  deck
})
