/* eslint-disable */
import initialState from './../../typicalBlocks/forInitialState'

console.log(initialState, 'sadd')
// let newTb = initialState.tb107.map(p => p)

export const customReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'changeSelectedItem':
      const newItem = state[action.id]
      newItem.node = action.payload
      return {
        ...state,
        [action.id]: newItem
      };
    default:
      return state;
  }
}