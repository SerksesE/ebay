import { LOAD_ITEMS, ADD_ITEM } from "../actions/items";

const itemsReducer = (state = [], action) => {
  console.log('reducer', action.items)
  switch (action.type) {
    case LOAD_ITEMS:
      return action.items
    case ADD_ITEM:
      return { item: state.item.concat(action.item) }
    default:
      return state
  }
}

export default itemsReducer