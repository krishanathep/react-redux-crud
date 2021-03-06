import React, { Component } from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import EditComponent from "./EditComponent";

export class ShowComment extends Component {
  render() {
    return (
      <div className="Show Comment container">
        {this.props.comments.map((comment) => (
          <div key={comment.id}>
            {comment.editing ? (
              <EditComponent key={comment.id} comment={comment} />
            ) : (
              <Comments key={comment.id} comment={comment} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state,
  };
};

export default connect(mapStateToProps)(ShowComment);
