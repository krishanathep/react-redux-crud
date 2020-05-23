import React, { Component } from "react";
import { connect } from 'react-redux'

export class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        <li>
          <ul>
            Title : {this.props.comment.title} | Comment : {this.props.comment.message} | Name: {this.props.comment.name} 
            <button onClick={()=>this.props.dispatch({type:'EDIT_COMMENT', id: this.props.comment.id})}>Edit</button> 
            <button onClick={()=>this.props.dispatch({type:'DELETE_COMMENT', id: this.props.comment.id})}>Delete</button>
          </ul>
        </li>
      </div>
    );
  }
}

export default connect() (Comments);
