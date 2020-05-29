/*eslint-disable*/
const initialState = JSON.parse(localStorage.getItem('allNpa')) || []

export const listReducer = (state = initialState, action) => {
  const obj = {
    ADD_NEW: () => [...state, action.payload],
    DELETE_CARD: () => state.filter(i => i.id !== action.id),
    SET_DOC: () => state.map(i => i.id === action.id ? { ...action.newDoc } : i),
    ADD_ITEM: () => state.map(i => i.id === action.id ? { ...i, items: [...i.items, action.payload] } : i),
    ADD_ITEM_APP: () => state.map(i => i.id === action.id ? { ...i, itemsApp: [...i.itemsApp, action.payload] } : i),
    SET_ITEMS: () => state.map(i => i.id === action.id ? { ...i, items: action.items, itemsApp: action.itemsApp } : i),
    EDIT_CARD_TITLE: () => state.map(i => i.id === action.id ? { ...i, title: action.title } : i),
  }

  const res = obj[action.type]
  const allNpa = res ? res() : state
  localStorage.setItem('allNpa', JSON.stringify(allNpa))
  return allNpa
}
