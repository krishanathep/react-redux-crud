import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from 'react-redux'

export class CommentForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const name = this.getName.value;
    const data = {
      id: uuidv4(),
      title,
      message,
      name,
      editing:false,
    };

    this.props.dispatch({
        type: 'ADD_COMMENT',
        data
    })

    this.getTitle.value = '';
    this.getMessage.value = '';
    this.getName.value = '';

    console.log(data);
  };

  render() {
    return (
      <div className="Comment Form">
        <form onSubmit={this.handleSubmit}>
          <h1>Comment Form</h1>
          Title : <br />
          <input type="text" ref={(input) => (this.getTitle = input)} />
          <br />
          Comment : <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            ref={(input) => (this.getMessage = input)}
          ></textarea>
          <br />
          Name: <br/>
          <input type="text" ref={(input)=>(this.getName =input)}/>
          <br /><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect() (CommentForm);
