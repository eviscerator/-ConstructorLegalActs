import uniqId from 'uniqid'

export const createAction = (npaType, keyNpa, type, title, template) => {
  return {
    type: 'ADD_NEW',
    payload: { npaType, keyNpa, type, title, template, date: Date.now(), id: uniqId(), items: [], itemsApp: [], app: false },
  }
}
