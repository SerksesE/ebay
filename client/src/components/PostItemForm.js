import React from 'react'

export default function PostItemForm(props) {
  return (
    <div>

      <form onSubmit={props.onSubmit}>
        <label>Item</label>
        <input onChange={props.onChange} name="itemName" value={props.values.itemName}></input>

        <label>Price</label>
        <input onChange={props.onChange} name="price" value={props.values.price}></input>

        <label>Description</label>
        <input onChange={props.onChange} name="description" value={props.values.description}></input>

        <input type="submit"></input>
      </form>

    </div>
  )
}