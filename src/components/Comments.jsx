import React, { Component } from "react";
import { connect } from "react-redux";

export class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        <div className="card mt-3">
          <div className="card-body">
            <h4 className="card-title">{this.props.comment.title}</h4>
            <p className="card-text text-muted">{this.props.comment.message}</p>
            <p className="card-text text muted">{this.props.comment.name}</p>
            <button
              className="btn btn-primary mr-1"
              onClick={() =>
                this.props.dispatch({
                  type: "EDIT_COMMENT",
                  id: this.props.comment.id,
                })
              }
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_COMMENT",
                  id: this.props.comment.id,
                })
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Comments);
