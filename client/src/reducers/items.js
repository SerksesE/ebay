import { LOAD_ITEMS, ADD_ITEM } from "../actions/items";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return action.items
    case ADD_ITEM:
      return { items: state.items.concat(action.item) }
    default:
      return state
  }
}

export default itemsReducer