export const addItemAction = (id, item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
    id,
  }
}
