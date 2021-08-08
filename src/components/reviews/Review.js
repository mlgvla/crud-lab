import React, { Component } from 'react';

class Review extends Component {
    
    handleClick = () => {
        this.props.deleteReview(this.props.review.id)
    }

  render() {
    console.log("In Review")
    return (
       
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
