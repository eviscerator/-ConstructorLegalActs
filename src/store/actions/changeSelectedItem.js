export const changeSelectedItem = (id, item) => {
  return {
    type: 'changeSelectedItem',
    payload: item,
    id,
  }
}
