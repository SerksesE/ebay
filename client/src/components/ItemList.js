import React from 'react'

export default function ItemList(props) {
  return (
    <div>
      <h1>Ebay</h1>
      <h2>There are {props.items && props.items.length} items for sale!</h2>
      <ul>
        {props.render()}
      </ul>
    </div>
  )
}