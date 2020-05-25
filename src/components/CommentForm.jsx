import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

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
      editing: false,
    };

    this.props.dispatch({
      type: "ADD_COMMENT",
      data,
    });

    this.getTitle.value = "";
    this.getMessage.value = "";
    this.getName.value = "";

    console.log(data);
  };

  render() {
    return (
      <div className="Comment Form container">
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-3">
              <div className="card-header">
                <h4>Comment Form</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input
                      type="text"
                      ref={(input) => (this.getTitle = input)}
                      className="form-control"
                      placeholder="Entoer Title Comment..."
                      required
                    />
                  </div>
                  <div className="form-group"></div>
                  <label htmlFor="">Message:</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    ref={(input) => (this.getMessage = input)}
                    className="form-control"
                    placeholder="Enter Message Comment..."
                    required
                  ></textarea>
                  <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input
                      type="text"
                      ref={(input) => (this.getName = input)}
                      className="form-control"
                      placeholder="Enter Your Name..."
                      required
                    />
                  </div>
                  <div className="form-group float-right">
                  <input className='btn btn-primary fl' type="submit" value="Submit" />
                  </div>
                </form>
              </div>       
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CommentForm);
