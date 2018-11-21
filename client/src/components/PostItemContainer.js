import React from 'react'
import { connect } from 'react-redux'
import PostItemForm from './PostItemForm'
import { addItems } from '../actions/items'


class PostItemContainer extends React.Component {
    state = {
        itemName: '',
        price: '',
        description: ''
      }


    onChange = (item) => {
        this.setState({
          [item.target.name]: item.target.value
        })
      }
    
    onSubmit = (item) => {
        item.preventDefault()
        this.setState({
          itemName: '',
          price: '',
          description: ''
        })
        this.props.addItems(this.state)
      }
    
    render() {
        
        return (<PostItemForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />)
      }

}
  
export default connect(null, { addItems })(PostItemContainer)