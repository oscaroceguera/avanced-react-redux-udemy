import React, { Component } from 'react';

export default class CommentBox extends Component {
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
    this.setState({
      comment: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.HandleChange.bind(this)}/>
        <button action="submit">Submit Commnet</button>
      </form>
    );
  }
}
