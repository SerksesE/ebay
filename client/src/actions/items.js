import request from 'superagent'

const database = 'http://localhost:4001'

export const LOAD_ITEMS = 'LOAD_ITEMS'
export const ADD_ITEM = 'ADD_ITEM'

const itemsLoaded = items => ({
  type: LOAD_ITEMS,
  items
})

const itemAdded = item => ({
  type: ADD_ITEM,
  item
})

export const loadItems = () => (dispatch, getState) => {
  if (getState().items) return

  request(`${database}/items`)
  .then(res => {
    console.log(res.body)
    dispatch(itemsLoaded(res.body))
  })
  .catch(err => console.log(err))
}

export const addItems = (info) => (dispatch) => {
  console.log('hat')
  request
  .post(`${database}/items`)
  .send(info)
  .then(res => {
    console.log('hit')
    dispatch(itemAdded(res.body))
  })
  .catch(err => console.log(err))
}
