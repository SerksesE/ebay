import React from 'react'
import { connect } from 'react-redux'
import ItemList from './ItemList'

class ItemListContainer extends React.Component {
  
  render(){
    return <ItemList/>
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps)(ItemListContainer)