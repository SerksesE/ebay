import React from 'react'
import { connect } from 'react-redux'
import ItemList from './ItemList'
import { loadItems } from '../actions/items'
import { Link } from 'react-router-dom'

class ItemListContainer extends React.Component {

  componentDidMount() {
    this.props.loadItems()
  }

  renderItems = () => {
    console.log('render')
    if (!this.props.items) {
      return 'Loading items...'
    }
    return this.props.items.map(item =>
      <li className="item" key={item.id}><Link to={`/items/${item.id}`}>
        Item: {item.itemName} | Price: {item.price}</Link></li>)
  }

  render() {
    return <ItemList items={this.props.items} render={this.renderItems} />
  }
}

const mapStateToProps = state => ({
  items: state.itemsReducer.items
})

export default connect(mapStateToProps, { loadItems })(ItemListContainer)