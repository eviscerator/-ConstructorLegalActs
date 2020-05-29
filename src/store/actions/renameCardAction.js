export const renameCardAction = (id, title) => {
  return {
    type: 'EDIT_CARD_TITLE',
    title,
    id,
  }
}
