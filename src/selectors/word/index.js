import { createSelector } from 'reselect'

export const getSelectedWord = (state) => state.word.selected
export const getWords = (state) => state.word.words

export const getSelectedWordData = createSelector(
  [ getSelectedWord, getWords ],
  (selectedWord, words) => {
    return words[selectedWord];
   }
)
