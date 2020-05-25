import React, { Component } from "react";
import { connect } from "react-redux";

export class EditComponent extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const newtitle = this.getTitle.value;
    const newmessage = this.getMessage.value;
    const newname = this.getName.value;

    const data = {
      newtitle,
      newmessage,
      newname,
    };
    
    this.props.dispatch({
      type: 'UPDATE_COMMENT',
      id: this.props.comment.id,
      data: data,
    })
  };

  render() {
    return (
      <div className="Edit Componet">
        <form onSubmit={this.handleSubmit}>
          Title : <br />
          <input type="text" ref={(input) => (this.getTitle = input)} defaultValue={this.props.comment.title} />
          <br />
          Comment : <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            ref={(input) => (this.getMessage = input)}
            defaultValue={this.props.comment.message}
          ></textarea>
          <br />
          Name: <br />
          <input type="text" ref={(input) => (this.getName = input)} defaultValue={this.props.comment.name} />
          <br />
          <br />
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
