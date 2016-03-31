import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

class CommentBox extends Component {
  constructor(props){
    super(props)

    this.state = {
      comment : ''
    }
  }

  HandleChange(event){
    this.setState({
      comment: event.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()

    // call the action => saveComment
    this.props.saveComment(this.state.comment)

    this.setState({
      comment: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a commnet</h4>
        <div>
          <textarea
          value={this.state.comment}
          onChange={this.HandleChange.bind(this)}/>
        </div>
          <button action="submit">Submit Commnet</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox)
