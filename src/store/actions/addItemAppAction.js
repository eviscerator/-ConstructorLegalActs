export const addItemAppAction = (id, item) => {
  return {
    type: 'ADD_ITEM_APP',
    payload: item,
    id,
  }
}
